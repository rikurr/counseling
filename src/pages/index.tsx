import { getAllQuestion } from 'api/question'
import { Question } from 'components/question'
import { Top } from 'components/top/index'
import { NextPage } from 'next'
import React, { useCallback, useEffect, useState } from 'react'

type Data = React.ComponentProps<typeof Question>

const isQuestionData = (data: unknown): data is Data[] => {
  if (Array.isArray(data)) {
    return true
  }

  return false
}

const TOTAL_QUESTIONS = 3

const Home: NextPage = () => {
  const [start, setStart] = useState(false)
  const [step, setStep] = useState(0)
  const [result, setResult] = useState(false)
  const [questions, setQuestions] = useState<Data[]>([])
  const [userAnswers, setUserAnswers] = useState<number[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllQuestion()
      if (isQuestionData(data)) {
        setQuestions(data)
        console.log(data)
      }
    }

    fetch()
  }, [])

  // 診断開始
  const handleStart = useCallback(() => {
    setStart(true)
    setStep(0)
    setUserAnswers([])
  }, [])

  const handleSelect = (index: number) => {
    setUserAnswers(userAnswers.concat(index))
    if (TOTAL_QUESTIONS !== userAnswers.length) {
      setStep((prev) => prev + 1)
    }
  }

  const handleCancel = () => {
    const cancelUserAnswers = userAnswers
    cancelUserAnswers.pop()
    setUserAnswers(cancelUserAnswers)
    setStep((prev) => prev - 1)
  }

  console.log(userAnswers)
  console.log(step)
  return (
    <main className="m-auto mt-24 w-3/6">
      {!start && <Top onClick={handleStart} />}
      {start && TOTAL_QUESTIONS !== userAnswers.length && (
        <Question
          question={questions[step].question}
          answers={questions[step].answers}
          handleSelect={handleSelect}
          handleCancel={handleCancel}
          userAnswers={userAnswers}
          step={step + 1}
        />
      )}
      {TOTAL_QUESTIONS === userAnswers.length && (
        <>
          <div>result</div>
          <div>{userAnswers.join('')}</div>
          <button
            className="p-2 text-white bg-gray-500 border border-solid rounded-md hover:opacity-70 transition"
            onClick={handleStart}
          >
            もう一度診断する
          </button>
          <button
            className="p-2 text-white bg-gray-500 border border-solid rounded-md hover:opacity-70 transition"
            onClick={handleCancel}
          >
            戻る
          </button>
        </>
      )}
    </main>
  )
}

export default Home
