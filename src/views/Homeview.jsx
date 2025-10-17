import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Main from '../components/Main'
import Portfolio from '../components/Portfolio'



const Homeview = () => {
  return (
    <>
        <Header />
        <Main>
          <AboutMe />
          <Portfolio />
        </Main>        

    </>
  )
}

export default Homeview