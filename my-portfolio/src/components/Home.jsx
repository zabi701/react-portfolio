import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import './Navbar'
import './responsive.css'
const Home = () => {
  return (
    <div className="container home" id='home'>
      <div className="left">
        <h1>Iam K zabiullah</h1>
        <a href={pdf} download={"resume.pdf"} className="btn btn-outline-warning">Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt='hero'></img>
        </div>
      </div>
    </div>
  )
}

export default Home