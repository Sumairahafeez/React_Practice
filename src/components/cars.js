import React from 'react'

export default function Cars(props) {
  return (
    <div>
      <h1>This is a car named {props.Name} in {props.color} made in {props.year}</h1>
    </div>
  )
}
