import React from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../component/Home/CardProducts'
import './styles/home.css'

const Home = () => {

  const products = useSelector(state => state.products)

  return (
    <div>
      <h1>Home</h1>
      <div className='container__products'>
        {
          products?.map(prod => (
            <CardProducts 
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home