import React from "react"
import Image from "next/image"
import avocado from '@public/avocadoStore.webp'

export default function Header () {
  return (
		<div className="container">
			Avocado
      <Image src={avocado} alt="avocado image" width={70} height={70}/>
      storE
		</div>
	)
}