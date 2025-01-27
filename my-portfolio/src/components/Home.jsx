import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
const Home = () => {
  return (
    <div className="container home">
      <div className="left">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
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