import React from 'react'
import ProductReviewCard from '../components/ProductReviewCard.js';
import '../styles/ProductReviews.css';
import data from '../data/data.json';
const productReviews = data.productReviews;
const ProductReviews = () => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}/>
        ))}
    </div>
  )
}

export default ProductReviews