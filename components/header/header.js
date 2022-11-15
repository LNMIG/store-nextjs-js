import React from "react"
import Image from "next/image"
import avocado from '@public/avocadoStore.webp'
import Card from "react-bootstrap/Card"

export default function Header () {
  return (
		<Card
      style={{
        height:'8rem',
        background:'#ddf516',
        border:'none',
        borderRadius:'0',
        borderTop: '4px solid #f7fdb1',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'nowrap',
        gap:'2rem'
      }}
    >
			<h1 style={{ color:"#6a2e2e" }}>Avocado</h1>
      <Image src={avocado} alt="avocado image" width={70} height={70}/>
      <h1 style={{ color:"#6a2e2e" }}>store</h1>
		</Card>
	)
}