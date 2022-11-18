import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Card from 'react-bootstrap/Card'
import Layout from '@components/layout/layout'
import ProductSummary from '@components/productSummary/productSummary'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (query.id) {
        fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((response) => setProduct(response))
    }
  }, [query.id])

  return (
    <div
      className="container"
      style={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center'
      }}
    >
      <Card
        style={{
          width: '60rem',
          height: '100vh',
          border: 'none',
          position: 'relative',
        }}
      >
        <Layout>
          {product == null ? null : <ProductSummary product={product} />}
        </Layout>
      </Card>
    </div>
  )
}

export default ProductPage