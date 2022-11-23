import { useContext } from 'react'
import Layout from '@components/layout/layout'
import CartItemList from '@components/cartItemList/cartItemList'
import CartSummary from '@components/cartSummary/cartSummary'
import AppContext from '@context/appContext'
import Card from 'react-bootstrap/Card'

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
  const { useCart, removeFromCart } = useContext(AppContext)
  const { items, subTotal } = useCart()

  return (
    <div className='container' style={divContainer}>
      <Card style={card} >
        <Layout>
          <div className='d-flex flex-column' style={{minHeight:'70%'}}>
            <CartItemList items={items} removeFromCart={removeFromCart} />
            <hr />
            <CartSummary totalAmount={subTotal} />
          </div>
        </Layout>
      </Card>
    </div>
  )
}

export default CartPage