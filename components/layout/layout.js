import React from 'react'
import Navbar from '@components/navbar/navbar'
import Footer from '@components/footer/footer'
import Card from 'react-bootstrap/Card'

export default function Layout({ children }) {
  return (
    <Card.Title
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        height: '80%'
      }}
    >
{/*-------------------------------------------*/}
      <Card.Header
        style={{
          borderTopLeftRadius:'1.25rem',
          borderTopRightRadius:'1.25rem'
        }}
      >

        <Navbar />

      </Card.Header>

{/*-------------------------------------------*/}

          { children }

{/*-------------------------------------------*/}

      <Card.Footer
        style={{
          borderBottomLeftRadius:'1.25rem',
          borderBottomRightRadius:'1.25rem',
          position:'absolute',
          bottom:'0rem',
          left:'0rem',
          right:'0rem',
        }}
      >

{/*-------------------------------------------*/}

        <Footer />

{/*-------------------------------------------*/}

      </Card.Footer>

    </Card.Title>
  )
}