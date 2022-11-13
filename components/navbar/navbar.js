import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import avocadoIcon from '@public/avocado.jpg'
import shoppingCartIcon from '@public/sesta.jpg'
// import { useCart } from '@store'

export default function Navbar () {
  const { pathname } = useRouter()
//   const { count: cartCount } = useCart()
  const cartCount = 0

  return (
      <div>
        <Link href="/" passHref>
          <span>
            <Image src={avocadoIcon} alt='avocado image' width={40} height={40}/>
            Avo Store
          </span>
        </Link>
        <Link href="/cart" passHref>
          <span>
            <Image src={shoppingCartIcon} alt='sesta' width={40} height={40}/>
            Canasta
            ({cartCount})
          </span>
        </Link>
      </div>
  )
}