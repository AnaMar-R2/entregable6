import React, { useEffect } from 'react'
import useFetch from '../../hook/useFetch'
import CardProducts from '../Home/CardProducts'

const SimilarProducts = ({ product }) => {

  const basUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [ productByCategory, getproductsByCategory ] = useFetch(basUrl)

  useEffect(() => {
    if (product) {
      getproductsByCategory(`/products?categoryId=${product.category.id}`)
    }
  }, [product])

  console.log(productByCategory)

  return (
    <div>
      <h2>Similar Products</h2>
      <div className='container__products'>
        {
          productByCategory?.map(prod => {
            if (product.id !== prod.id) {
              return(
                <CardProducts
                  key={prod.id}
                  prod={prod}
                />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts