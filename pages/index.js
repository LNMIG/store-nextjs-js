import React, { useEffect, useState } from "react"
import Layout from "@components/layout/layout"
import Header from "@components/header/header"
import ProductList from "@components/productList/productList"
import Head from 'next/head'
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function HomePage () {
  
  const [productsList, setProductsList] = useState([])

  useEffect (() => {
      fetch('/api/avo')
      .then(response => response.json())
      .then(response => setProductsList(response.data))
  }, [])

  return (
    <div
      className="container"
      style={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center'
      }}
    >
      <Head>
        <title>Store using NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/avocado.ico" />
      </Head>

      <Card
        style={{
          width: '60rem',
          height: '100vh',
          border:'none',
          position:'relative',
        }}
      >
        <Layout>
          <Header/>
          <ProductList products={productsList}/>
        </Layout>
      </Card>
    </div>
  )
}