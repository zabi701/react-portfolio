import React from 'react'
import skills from './data/skills.json'
const Skills = () => {
  return (
    <div className="container skills">
      <h1>SKILLS</h1>
      <div className="items">
      {skills.map((data)=>{
        return(
<div className='item' key={data.id}>
    <img src={`/assets/${data.imageSrc}`}></img>
    <h3>{data.title}</h3>
  </div>
        )
      })}
      </div>
      </div>
  )
}
export default Skills;