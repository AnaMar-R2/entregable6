import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import './cardProducts.css'
import { useNavigate } from 'react-router-dom'

const CardProducts = ({ prod }) => {

  const navigate = useNavigate()

  const handleDetail = () => {
    navigate(`/product/${prod.id}`)
  }

  const handleAddCart = e => {
    e.stopPropagation()
  }

  return (
    <article className='product' onClick={handleDetail}>
      <header className='product__header'>
        <div className='product__img_container'>
          <img className='product__img' src={prod?.images[0].url} alt="image1__product" />
        </div>
        <div className='product__img_container'>
          <img className='product__img' src={prod?.images[1].url} alt="image2__product" />
        </div>
      </header>
      <section className='product__body'>
        <header className='product__titles'>
          <h3 className='product__brand'>{prod?.brand}</h3>
          <h2 className='product__name'>{prod?.title}</h2>
        </header>
        <article className='product__price'>
          <span className='product__price_label'>Price</span>
          <h3 className='product__price_value'>{prod?.price}</h3>
        </article>
        <button className='product__btn' onClick={handleAddCart}>
          <GiShoppingCart className='product__btn_icon' />
        </button>
      </section>
    </article>
  )
}

export default CardProducts