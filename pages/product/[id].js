import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Card from 'react-bootstrap/Card'
import Layout from '@components/layout/layout'
import ProductSummary from '@components/productSummary/productSummary'


export const getStaticPaths = async () => {
  const response = await fetch('https://store-with-nextjs.vercel.app/api/avo')
  const { data } = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}


// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await fetch( `https://store-with-nextjs.vercel.app/api/avo/${params?.id}` )
  const product = await response.json()

  // Pass post data to the page via props
  return { props: { product } }
}


const ProductPage = ({ product }) => {
  // const { query } = useRouter()
  // const [product, setProduct] = useState(null)

  // useEffect(() => {
  //   if (query.id) {
  //       fetch(`/api/avo/${query.id}`)
  //       .then((response) => response.json())
  //       .then((response) => setProduct(response))
  //   }
  // }, [query.id])

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