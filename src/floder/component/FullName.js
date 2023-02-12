import React from 'react'

function FullName(props) {
  return (
    <>
    <div>FullName {props.name}</div>
    <button onClick={()=>props.fct(props.FullName)}>click</button>
    </>
  )
}

export default FullName