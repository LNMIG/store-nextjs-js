import Layout from '@components/layout/layout'
import CartItemList from '@components/cartItemList/cartItemList'
import CartSummary from '@components/cartSummary/cartSummary'
import { useCart, useCartMutations } from '@store'
import Card from 'react-bootstrap/Card'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const card = {
  width: '60rem',
  height: '100vh',
  border: 'none',
  position: 'relative',
}

const divContainer = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
}

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()
  console.log(items)
  return (
    <div className='container' style={divContainer}>
      <Card style={card} >
        <Layout>
          <div className='d-flex flex-column' style={{minHeight:'70%'}}>
            <CartItemList items={items} removeFromCart={removeFromCart} />
            <hr />
            <CartSummary totalAmount={count} />
          </div>
        </Layout>
      </Card>
    </div>
  )
}

export default CartPage