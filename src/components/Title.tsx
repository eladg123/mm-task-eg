import React from 'react'
import '../css/title.css'

interface Props {
  titleContent: string
}

const Title = ({ titleContent }: Props) => {
  return <div className="title">{titleContent}</div>
}

export default Title
