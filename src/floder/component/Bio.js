import React from 'react'
import'./bio.css'
function Bio(props) {
  return (

    <div>Bio{props.age}
    
    <img src={props.children} className='bio'></img></div>
  )
}

export default Bio