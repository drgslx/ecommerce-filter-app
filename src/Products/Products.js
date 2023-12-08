import React from 'react'
import './Products.css'


const Products = ({result}) => {
  return (
    <>
      {
      result.length === 0 ? (<div className='card-container'><h2>We are deeply sorry but we didn't find anything with this criteria </h2></div>)
      : (<section className='card-container'>
         {result}
      </section>)}
      
      
    </>
  )
}

export default Products