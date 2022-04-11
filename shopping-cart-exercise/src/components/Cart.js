
const Cart = (props) => {
    const {cartLength} = props;
  return (
    <section>
        <a href="#">Cart</a>
        <span>{ cartLength }</span>
    </section>
  )
}

export default Cart
