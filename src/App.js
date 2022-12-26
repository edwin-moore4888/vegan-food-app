import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = () => {
    setCartIsOpen(true)
  };

  const hideCartHandler = () => {
    setCartIsOpen(false)
  };

  return (
    <Fragment className="App">
      {cartIsOpen && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
