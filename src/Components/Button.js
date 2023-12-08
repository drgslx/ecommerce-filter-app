import React from 'react'

function Button({onClickHandler, value, title}) {
  return (
    <>
      <button value={value} onClick={onClickHandler} className='btns'>{title}</button>
    </>
  )
}

export default Button