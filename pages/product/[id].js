import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/layout/layout'
import ProductSummary from '@components/productSummary/productSummary'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage