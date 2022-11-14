import React from "react"
import Image from "next/image"
import avocado from '@public/avocadoStore.webp'
import Card from "react-bootstrap/Card"

export default function Header () {
  return (
		<Card
      style={{
        height:'8rem',
        border:'none',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:'2rem'
      }}
    >
			<h1>Avocado</h1>
      <Image src={avocado} alt="avocado image" width={70} height={70}/>
      <h1>store</h1>
		</Card>
	)
}