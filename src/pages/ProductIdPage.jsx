import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import ProductInfo from '../component/ProductId/ProductInfo'
import SimilarProducts from '../component/ProductId/SimilarProducts'

const ProductIdPage = () => {

  const { id } = useParams()

  const basUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [ product, getProductById ] = useFetch(basUrl)

  useEffect(() => {
    getProductById(`/products/${id}`)
  }, [id])

  return (
    <div>
      <ProductInfo
        product={product}
      />
      <SimilarProducts
        product={product}
      />
    </div>
  )
}

export default ProductIdPage