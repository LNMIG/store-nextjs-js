import Layout from '@components/layout/layout'
import CartItemList from '@components/cartItemList/cartItemList'
import CartSummary from '@components/cartSummary/cartSummary'
import { useCart, useCartMutations } from '@store'

import 'bootstrap/dist/css/bootstrap.css'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <br/>
      <CartSummary totalAmount={count} />
    </Layout>
  )
}

export default CartPage