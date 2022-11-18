import React from "react"
import Image from "next/image"
import avocado from '@public/avocadoStore.webp'
import Card from "react-bootstrap/Card"

const cardMain = {
  background:'#ddf516',
  border:'none',
  borderRadius:'0',
  marginTop:'0.25rem',
}

const cardBody = {
  border:'none',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  flexWrap:'nowrap',
  gap:'2rem'
}

export default function Header () {
  return (
		<Card className="container" style={cardMain}>
      <Card.Body style={cardBody}>
			  <Card.Text style={{ fontSize:'2rem', color:"#6a2e2e", margin:'0'}}>Avocado</Card.Text>
        <Image src={avocado} alt="avocado image" width={70} height={70}/>
        <Card.Text style={{ fontSize:'2rem', color:"#6a2e2e"}}>store</Card.Text>
      </Card.Body>
		</Card>
	)
}