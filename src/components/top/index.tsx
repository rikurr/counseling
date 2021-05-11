import React from 'react'

type Props = {
  onClick: () => void
}

export const Top: React.VFC<Props> = ({ onClick }) => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">生活診断</h1>
      <div className="mt-4 text-center">
        <button
          onClick={onClick}
          className="p-2 text-white bg-blue-500 border border-solid rounded-sm hover:opacity-80 transition"
        >
          スタート
        </button>
      </div>
    </div>
  )
}
