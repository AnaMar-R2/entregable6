import React, { useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import './productInfo.css'

const ProductInfo = ({ product }) => {

  const [quantity, setQuantity] = useState(1)

  const handleMinus = () => {
    if (quantity-1 >= 1) {
      setQuantity(state => state - 1)
    }
  }
  const handleAdd = () => setQuantity(state => state + 1)

  return (
    <article className='productInfo'>
      <h3 className='productInfo__brand'>{product?.brand}</h3>
      <h2 className='productInfo__name'>{product?.title}</h2>
      <p className='productInfo__text'>{product?.description}</p>
      <footer className='productInfo__footer'>
        <ul className='productInfo__details'>
          <li className='productInfo__price'>
            <span className='productInfo__price_label'>Price</span>
            <span className='productInfo__price_value'>$ {product?.price}</span>
          </li>
          <li className='productInfo__quantity'>
            <span className='productInfo__quantity_label'>Quantity</span>
            <div className='productInfo__quantity_value'>
              <div className='productInfo__quantity_value_item item__add' onClick={handleMinus}>-</div>
              <div className='productInfo__quantity_value_item item__state'>{quantity}</div>
              <div className='productInfo__quantity_value_item item__minus' onClick={handleAdd}>+</div>
            </div>
          </li>
        </ul>
        <button className='productInfo__addToCart__btn'>
          <span>Add to Cart </span>
          <GiShoppingCart className='productInfo__btn_icon'/> 
        </button>
      </footer>
    </article>
  )
}

export default ProductInfo