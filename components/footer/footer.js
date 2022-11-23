import React from 'react'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants'

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
  fontWeight:'700',
}

const navLink = {
  padding:'0.75rem 0rem',
  textDecoration: 'none',
  color:'#8109b7',
  fontSize:'0.85rem',
  fontWeight: 'bold',
}

export default function Footer () {
  return (
    <Card.Title className='container-sm' style={cardTitle}>
      <Card.Text className='d-flex flex-column' style={cardText}>
        Nosotros
        <Link href='/about' style={navLink}> Conoce más </Link>
      </Card.Text>

      <Card.Text className='d-flex flex-column' style={cardText}>
        Servicios
        <Link href='/' style={navLink}> Todos los productos </Link>
      </Card.Text>

      <Card.Text className='d-flex flex-column' style={cardText}>
        Hecho para
        <span className='d-flex flex-column'
          style={{...navLink, color:'black', lineHeight:'160%'}}>
          Desarrollar habilidades en el uso de 

          <Link href='https://nextjs.org/'  target='_blank'
            style={{ fontSize:'0.85rem', color:'#8109b7',textDecoration: 'none',
            }}
          >
            Next Js
          </Link>
        </span>
      </Card.Text>
    </Card.Title>
)
}