import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

const CartItemList = ({ items, removeFromCart, loading = false}) => {
  if (loading) {
    return (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
    )
  }

  if (items.length === 0)
    return (
      <Alert variant='danger' className='mt-4 mb-0'>
        <Alert.Heading>Your cart is empty</Alert.Heading>
        <p className='mb-0'>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Alert>
    )

  const mapCartItemsToItems = (items) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem

      return {
        childKey: id,
        header: (
          <Link href={`/product/${id}/`}>
            <Card.Header as="a">{name}</Card.Header>
          </Link>
        ),
        image: (
          <Card.Img
            src={image}
            alt={name}
            size="small"
            style={{ background: '#f2f2f2' }}
          />
        ),
        meta: `${quantity} x ${price}`,
        description: 'Some more information goes here....',
        extra: (
          <button
            type='button'
            className='btn btn-warning'
            floated="right"
            onClick={() => removeFromCart(cartItem)}
          ></button>
        ),
      }
    })

  return <li className='list-group-item' divided items={mapCartItemsToItems(items)} as="section" />
}

export default CartItemList