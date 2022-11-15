import React from "react"
import Card from 'react-bootstrap/Card'
import ProductAttributes from "./productAttributes"

export default function ProductSummary({ product }) {
  return (
    <Card
      style={{
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        border:'none',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '5rem',
        }}
      >

        <Card.Img
          src={product.image}
          style={{ width: '300px' }}
        />

        <Card.Body style={{ height: '200px' }}>

          <Card.Title
            style={{
              fontSize: '1.5rem'
            }}
          >
            {product.name}
          </Card.Title>

          <Card.Text
            style={{
              fontWeight: '400',
              fontSize: '1.15rem'
            }}
          >
            $ {product.price}
          </Card.Text>

          <Card.Text
            style={{
              background: '#E8E8E8',
              borderRadius: '5px',
              maxWidth: 'fit-content',
              padding: '5px 15px',
              fontSize: '0.80rem',
              fontWeight: '500'
            }}
          >
            {`SKU: ${product.sku}`}
          </Card.Text>

        </Card.Body>
      </div>
      {console.log(product)}
      <ProductAttributes {...product.attributes}/>
    </Card>
  )
}