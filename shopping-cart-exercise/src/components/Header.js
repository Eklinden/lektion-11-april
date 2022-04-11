import Cart from './Cart'

const Header = (props) => {
  const {cartLength} = props;
  return (
    <header>
        <Cart cartLength={cartLength}/>
    </header>
  )
}

export default Header
