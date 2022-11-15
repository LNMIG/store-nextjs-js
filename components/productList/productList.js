import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'

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
            <Nav.Link href={`/product/${id}`}>
              <div>
                <Image
                  src={image}
                  alt="First Avo"
                  width={200}
                  height={200}
                />
              </div>
            </Nav.Link>
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

// return (
//   <>
//   {productList?.map(({ name, id, image, price}) => (
//     <Nav.Link key={id} href={`/product/${id}`}>
//       <Card
//         header={name}
//         image={image}
//         meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
//       />
//     </Nav.Link>
//   ))}
//   </>
// )

// <Carousel
// fade
// variant='dark'
// style={{ minHeight: '100%', border: '2px solid blue'}}
// >
// {(products.length > 0)
// ? products.map(({ name, id, image, price}) => (
//   <Carousel.Item key={id} className='d-block w-100'
//     // style={{
//     //   display:'flex',
//     //   flexDirection: 'column',
//     //   justifyContent:'space-between',
//     //   alignItems: 'center',
//     //   border:'2px solid red',

//     // }}
//   >
//       <Image
//         style={{
//           border:'1px solid black',
//         }}
//         src={image}
//         alt="oneAvo"
//         width={300}
//         height={300}
//       />
//       <Carousel.Caption>
//         <h3>{name}</h3>
//         <span>$ {price}</span>
//       </Carousel.Caption>
//   </Carousel.Item>
// ))
// : <div>Loading...</div>
// }
// </Carousel>
// )