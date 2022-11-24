import React, { useContext } from 'react'
import AppContext from '@context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import avocadoIcon from '@public/images/avocado.jpg'
import shoppingCartIcon from '@public/images/sesta.jpg'

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
  textDecoration: 'none',
  color: 'black',
}


export default function Navbar () {
  const { useCart } = useContext(AppContext)
  const { count: cartCount } = useCart()

  return (
      <Card.Title style={cardTitle}>
        <Link href="/" style={{...navLinkStyle, gap:'0.5rem'}}>
            <Image
              src={avocadoIcon}
              alt='avocado image'
              width={32}
              height={40}
              style={imageStyle}
            />
            <Card.Text>Avo Store</Card.Text>
        </Link>
        <Link href="/cart" style={{...navLinkStyle, gap:'0.75rem'}}>
            <Image
              src={shoppingCartIcon}
              alt='sesta'
              width={40}
              height={40}
              style={imageStyle}
            />
            Canasta
            ({cartCount})
        </Link>
      </Card.Title>
  )
}