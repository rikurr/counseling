import { Top } from 'components/top/index'
import { NextPage } from 'next'
import { useCallback, useState } from 'react'

const Home: NextPage = () => {
  const [start, setStart] = useState(false)
  const [userAnswers, setUserAnswers] = useState([])

  const handleStart = useCallback(() => {
    setStart(true)
  }, [])
  return (
    <main className="m-auto mt-24 w-3/6">
      {!start && <Top onClick={handleStart} />}
    </main>
  )
}

export default Home
