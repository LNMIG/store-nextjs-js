import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import Link from 'next/link'

const ProductList = ({ products }) => {
  return (
    <Carousel style={{ height: '100%' }} variant='dark' slide={false} fade>
      {products.length > 0
        ? products.map(({ id, name, image, price }) => (
          <Carousel.Item key={id}
            interval={1500}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: '500px',
            }}
          >
            <Link href={`/product/${id}`}>
              <div>
                <Image
                  src={image}
                  alt="First Avo"
                  width={200}
                  height={200}
                />
              </div>
            </Link>
            <Carousel.Caption>
              <h3>{name}</h3>
              <p>$ {price}</p>
            </Carousel.Caption>
          </Carousel.Item>

        ))
        : <div>Loading...</div>
      }
    </Carousel>
  )
}

export default ProductList