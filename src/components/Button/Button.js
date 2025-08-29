import React from 'react'

const Button = (props)=> {
  return (
    <div className='button'>
        <button className={props.name} id={props.id}>
          <span>{props.text}</span>
          
        </button>
    </div>
  )
}

export default Button