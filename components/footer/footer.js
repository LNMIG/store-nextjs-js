import React from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

export default function Footer () {
  return (
    <Card.Title 
      style={{
        padding:'1rem 1rem 0rem 1rem',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
      }}
    >
      <Card.Text
        style={{
          fontSize:'1.15rem',
          fontWeight:'500',
        }}
      >
        Nosotros
        <Nav.Link
          href='/about'
          style={{
            padding:'0.75rem 0rem',
            color:'#00bbf0',
            fontSize:'0.85rem'
          }}
        >
          Conoce más
        </Nav.Link>
      </Card.Text>

      <Card.Text
        style={{
          fontSize:'1.15rem',
          fontWeight:'500',
        }}
      >
        <div>Servicios</div>
        <Nav.Link
          href='/'
          style={{
            padding:'0.75rem 0rem',
            color:'#00bbf0',
            fontSize:'0.85rem'
          }}
        >
          Todos los productos
        </Nav.Link>
      </Card.Text>

      <Card.Text
        style={{
          fontSize:'1.15rem',
          fontWeight:'500',
        }}
      >
        <div>Hecho para</div>
        <div 
          style={{
            padding:'0.75rem 0rem',
            fontSize:'0.85rem',
            lineHeight:'160%'
          }}
        >
          Desarrollar habilidades en el uso de 

          <Nav.Link
            href='https://nextjs.org/'
            target='_blank'
            style={{ fontSize:'0.85rem', color:'#00bbf0',
            }}
          >
            Next Js
          </Nav.Link>
        </div>
      </Card.Text>
    </Card.Title>
)
}