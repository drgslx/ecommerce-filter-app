import React from 'react'

function InputColor({handleChangeColor, value, title, name, color}) {
  return (
    <>
      <label className='sidebar-label-container'>
      <input onChange={handleChangeColor} type="radio" value={value} name={name} />
        <span className='checkmark' style={{backgroundColor: color}}></span>{title}
      </label>


    </>
  )
}

export default InputColor