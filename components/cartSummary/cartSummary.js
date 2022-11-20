
const CartSummary = ({ totalAmount }) => {
  return (
    <div size="large" as="section">
      <span>
        <strong>Sub total:</strong>
        {` ${totalAmount}`}
      </span>
      <butto color="black" floated="right">
        Check out
      </butto>
    </div>
  )
}

export default CartSummary