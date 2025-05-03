import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import {bootstrap} from "bootstrap/dist/css/bootstrap.min.css";

const Banner = ({banner}) => {
  return (
    <Carousel>
    {banner.end.map((item,index)=>( /* Map Function is used for all items iteration. */
        <Carousel.Item key={item.image} id="banner" interval={1000}  keyboard={item.toString()}> {/* Every 1 second the image will be change*/} {/*keyboard={true} */}
       
       <img className='d-block w-100' id='bannerimage' src={item.image} alt={`${index} banner`} />
       <Carousel.Caption>
       <h3>{item.name}</h3>
       <p>{item.description}</p>
       <u>Read More</u>
       </Carousel.Caption>
        </Carousel.Item>
    ))}
    </Carousel>
  )
}

export default Banner;