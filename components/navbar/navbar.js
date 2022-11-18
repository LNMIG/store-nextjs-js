import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

import avocadoIcon from '@public/avocado.jpg'
import shoppingCartIcon from '@public/sesta.jpg'
// import { useCart } from '@store'

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
  const { pathname } = useRouter()
//   const { count: cartCount } = useCart()
  const cartCount = 0

  return (
      <Card.Title style={cardTitle}>
        <Nav.Link href="/" style={{...navLinkStyle, gap:'0.5rem'}}>
            <Image
              src={avocadoIcon}
              alt='avocado image'
              width={40}
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