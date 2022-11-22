import React from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

const cardTitle = {
  padding:'1rem 1rem 0rem 1rem',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'flex-start',
  flexWrap:'wrap',
}

const cardText = {
  fontSize:'1.15rem',
  fontWeight:'500',
}

const navLink = {
  padding:'0.75rem 0rem',
  color:'#8109b7',
  fontSize:'0.85rem'
}

export default function Footer () {
  return (
    <Card.Title className='container-sm' style={cardTitle}>
      <Card.Text style={cardText}>
        Nosotros
        <Nav.Link href='/about' style={navLink}> Conoce más </Nav.Link>
      </Card.Text>

      <Card.Text style={cardText}>
        Servicios
        <Nav.Link href='/' style={navLink}> Todos los productos </Nav.Link>
      </Card.Text>

      <Card.Text className='d-flex flex-column' style={cardText}>
        Hecho para
        <span 
          style={{...navLink, color:'black', lineHeight:'160%'}}>
          Desarrollar habilidades en el uso de 

          <Nav.Link href='https://nextjs.org/'  target='_blank'
            style={{ fontSize:'0.85rem', color:'#8109b7',
            }}
          >
            Next Js
          </Nav.Link>
        </span>
      </Card.Text>
    </Card.Title>
)
}