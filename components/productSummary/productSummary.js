import React from "react"
import Card from 'react-bootstrap/Card'
import ProductAttributes from "./productAttributes"
import AddToCart from './addToCart'

const card ={
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  border:'none',
}

const divMain = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap:'wrap',
  gap: '5rem',
}

const title = {
  fontSize: '1.5rem',
  maxWidth:'auto',
  maxHeight: 'auto',
}

const text1 = {
  fontWeight: '400',
  fontSize: '1.15rem',
}

const text2 = {
  background: '#E8E8E8',
  borderRadius: '5px',
  maxWidth: 'fit-content',
  padding: '5px 15px',
  fontSize: '0.80rem',
  fontWeight: '500',
}

export default function ProductSummary({ product }) {
  return (
    <Card style={card}>
      <div responsive='sm' style={divMain}>

        <Card.Img
          src={product.image}
          style={{ maxWidth: '18.75rem', maxHeight:'auto'}}
        />

        <Card.Body style={{ maxWidth:'auto', maxHeight: '200px'}}>

          <Card.Title style={title}>
            {product.name}
          </Card.Title>

          <Card.Text style={text1}>
            $ {product.price}
          </Card.Text>

          <Card.Text style={text2}>
            {`SKU: ${product.sku}`}
          </Card.Text>

          <AddToCart product={product}/>

        </Card.Body>
      </div>

      <ProductAttributes {...product.attributes}/>
    </Card>
  )
}