import React, { useContext, useState } from 'react'
import AppContext from '@context/appContext'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Fade from 'react-bootstrap/Fade'

const AddToCart = ({ product }) => {
  const [error, setError] = useState('')
  const [showError, setShowError] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useContext(AppContext)

  const toggleMessage = (message) => {
    if (message === 'error') {
      setTimeout(() => { setShowError(false) }, 1500)
    } else if (message === 'ok') {
      setTimeout(() => { setVisible(false) }, 1500)
    }
  }

  const handleSubmit = () => {
    addToCart(product, quantity)
    setQuantity(quantity)
    setVisible(true)
    toggleMessage('ok')
  }

  const handleChange = ({ target }) => {
    if (target.value < 1) {
      setQuantity('');
      setError("Can't be blank");
      setShowError(true);
      toggleMessage('error')
    } else {
      setQuantity(parseInt(target.value, 10))
      setError('');
    }
  }

  return (
    <>
      <InputGroup>
        <InputGroup.Text>Quantity</InputGroup.Text>
        <Form.Control
          min={1}
          placeholder=""
          value={quantity}
          onChange={handleChange}
        />
        <Button className="btn-success rounded-end" type="submit" onClick={handleSubmit}>
          <i className='bi bi-cart-plus pe-2'></i>
          Add to Cart
        </Button>

        <Fade in={showError} className='fs-6'>
          <div style={{ color: 'red', position: 'absolute', top: '100%' }}>{error}</div>
        </Fade>

        <Fade in={visible} className='fs-6'>
          <div style={{ color: 'green', position: 'absolute', top: '100%' }}>
            <i className="bi bi-check2 pe-2"></i>
            {`Added ${quantity} to cart`}
          </div>
        </Fade>

      </InputGroup>
    </>
  )
}

export default AddToCart