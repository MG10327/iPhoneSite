import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Highlights></Highlights>
      <Model/>
    </main>
  )
}

export default App