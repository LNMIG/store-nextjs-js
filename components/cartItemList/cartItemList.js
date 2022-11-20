import Link from 'next/link'
import Card from 'react-bootstrap/Card'

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
      <Card>
        <Card.Header>Your cart is empty</Card.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Card>
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