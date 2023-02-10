import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className='card'>
        <h1>Card number {props.nume}</h1>
        <p>{props.title}</p>
    </div>

  )
}
