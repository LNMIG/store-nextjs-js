import React from 'react'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'

import { useCart } from '@store'
import avocadoIcon from '@public/avocado.jpg'
import shoppingCartIcon from '@public/sesta.jpg'

const cardTitle = {
  padding:'1rem 1rem',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  flexWrap:'nowrap',
  gap:'2rem'
}

const imageStyle ={
  filter:'brightness(1.1)',
  mixBlendMode:'multiply',
}

const navLinkStyle = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  flexWrap:'nowrap',
}


export default function Navbar () {
  const { count: cartCount } = useCart()

  return (
      <Card.Title style={cardTitle}>
        <Nav.Link href="/" style={{...navLinkStyle, gap:'0.5rem'}}>
            <Image
              src={avocadoIcon}
              alt='avocado image'
              width={32}
              height={40}
              style={imageStyle}
            />
            <Card.Text>Avo Store</Card.Text>
        </Nav.Link>
        <Nav.Link href="/cart" style={{...navLinkStyle, gap:'0.75rem'}}>
            <Image
              src={shoppingCartIcon}
              alt='sesta'
              width={40}
              height={40}
              style={imageStyle}
            />
            Canasta
            ({cartCount})
        </Nav.Link>
      </Card.Title>
  )
}