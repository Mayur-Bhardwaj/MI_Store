import React from 'react'
import '../styles/starProduct.css'

const StarProducts = ({starProduct}) => {
  return (
    <div className='startProduct'>
    <div>
    <a href={starProduct[0].url}><img src={starProduct[0].image}/></a> </div>
    <div>
        <a href={starProduct[1].url}><img src={starProduct[1].image} alt="First starProduct"/></a>
        <a href={starProduct[2].url}><img src={starProduct[2].image} alt="First starProduct"/></a>
        <a href={starProduct[3].url}><img src={starProduct[3].image} alt="First starProduct"/></a>
    </div>
    </div>
  )
}

export default StarProducts