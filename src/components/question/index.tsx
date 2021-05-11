import React from 'react'

type Props = {
  question: string
  answers: string[]
  handleSelect: (index: number) => void
  handleCancel: () => void
  userAnswers: number[]
  step: number
}

export const Question: React.VFC<Props> = ({
  question,
  answers,
  handleSelect,
  handleCancel,
  userAnswers,
  step,
}) => {
  return (
    <div>
      <h2 className="text-lg">
        {step}.{question}
      </h2>
      <div className="mt-8" />
      <ul>
        {answers.map((answer, i) => (
          <li className="p-2" key={i}>
            <button
              className="p-2 text-white bg-blue-500 border border-solid rounded-md hover:opacity-70 transition"
              onClick={() => handleSelect(i + 1)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>

      {userAnswers.length >= 1 && (
        <button
          className="p-2 text-white bg-gray-500 border border-solid rounded-md hover:opacity-70 transition"
          onClick={handleCancel}
        >
          戻る
        </button>
      )}
    </div>
  )
}
