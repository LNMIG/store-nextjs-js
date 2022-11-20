import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CartSummary = ({ totalAmount }) => {
  return (
    <Card className='d-flex flex-row px-3 align-items-center'>
      <Card.Body className='px-0' style={{height:'4rem'}}>Sub total: $ {` ${totalAmount}`}</Card.Body>
      <Button className='btn-success fs-5' style={{width:'8rem', height:'3rem'}}> Check out </Button>
    </Card>
  )
}

export default CartSummary