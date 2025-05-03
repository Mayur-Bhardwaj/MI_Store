import React from 'react'
import "../styles/Prenavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg>

const Prenavbar = () => {
  return (
      <div className='preNav'>
       <div>
       <a href='/'> <img src="/images/logo.png" width={"150px"} height={"60px"} alt='This is logo'></img></a>
      
         <a href='https://www.mi.com/in/store' target={'_blank'}><span>Store</span></a>
        
         <a href='https://www.mi.com/in/phone'> <span>Phone</span></a>
         <a href='https://www.mi.com/in/smart-home'><span>Tv & SmartPhones </span></a>
         <a href='https://www.mi.com/in/smart-office'><span>Laptop & Tablets </span> </a>
         <a href='https://www.mi.com/in/life-style'><span>LifeStyles</span></a>
         <a href=''><span>Sign In</span></a>
         <a href='https://store.mi.com/in/site/login'><span>{cartIcon} CART (0)</span></a>
         </div>
      
      </div>
    )
}

export default Prenavbar