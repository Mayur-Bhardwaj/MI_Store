import React from 'react';
import '../styles/ProductReviewCard.css'

const ProductReviewCard = ({image, index, review, name, price}) => { /* When the image is not seen but alt text seen then the {} are not used into the props.  */
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard