import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [id, setId]  = useState('')


  return (
    <>
      <h1>Formulario Home</h1>
      <input value={id} onChange={(e) => setId(e.target.value)} type='text' />0
      <button></button>
    </>
  )
}

export default Home
