import './App.css';
import { useState } from 'react';

import products from './assets/products.json';

import Product from './components/Product';
import Header from './components/Header';

function App() {
  const [cart, setCart] = useState([]);

  function updateCart(product) {
    const cartCopy = [...cart];
    cartCopy.push(product);
    setCart(cartCopy);
  }

  const productItems = products.map((product, index) => {
    return <Product productInfo = { product } key={ index } updateCart={ updateCart }/>
  })

  return (
    <div className="App">
      <Header cartLength={cart.length}/>
      <section className='products'>
        { productItems }
      </section>
    </div>
  );
}

export default App;