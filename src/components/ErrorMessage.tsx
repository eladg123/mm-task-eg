import React from 'react'

interface Props {
  errMsg?: string
}

const ErrorMessage = ({ errMsg }: Props) => {
  return <div className="text-orange-700 text-center font-bold">{errMsg}</div>
}

export default ErrorMessage
