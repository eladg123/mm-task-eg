import React from 'react'
import '../css/navbar.css'
import Title from './Title'
import dictionary from '../dictionary/dictionary.json'

const Navbar = () => {
  return (
    <div className="navbar">
      <Title titleContent={dictionary.title} />
    </div>
  )
}

export default Navbar
