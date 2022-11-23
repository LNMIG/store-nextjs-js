import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'


const card = {
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  border: 'none'
}

const divMain = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '5rem',
}

const title = {
  fontSize: '1rem',
  maxWidth: 'auto',
  maxHeight: 'auto',
  textDecoration: 'none'
}

const text1 = {
  fontWeight: '400',
  fontSize: '1rem',
}


const CartItemList = ({ items, removeFromCart, loading = false }) => {

  if (loading) {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <Alert variant='danger' className='mt-4 mb-0'>
        <Alert.Heading>Your cart is empty</Alert.Heading>
        <p className='mb-0'>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Alert>
    )
  }

  return (
    <>
      {items.map(cartItem => (

        <Card className='border-bottom' style={card} key={cartItem.id}>
          <div responsive='sm' style={divMain}>

            <Card.Img
              src={cartItem.image}
              style={{ maxWidth: '5rem', maxHeight: 'auto' }}
            />

            <Card.Body className='position-relative' style={{ maxWidth: 'auto', maxHeight: '5rem' }}>
              <Link href={`/product/${cartItem.id}/`} style={{ textDecoration:'none' }}>
                <Card.Title style={title}>
                  {cartItem.name}
                </Card.Title>
              </Link>

              <Card.Text style={text1}>
                {cartItem.quantity} x $ {cartItem.price}
              </Card.Text>

              <Button
                className='position-absolute top-50 end-0 translate-middle-y'
                size='sm'
                variant='outline-danger'
                onClick={() => removeFromCart(cartItem)}
              >
                X
              </Button>

            </Card.Body>
          </div>
        </Card>
  ))}
</>
  )
}

export default CartItemList