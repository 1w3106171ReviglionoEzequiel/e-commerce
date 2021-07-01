import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { CartProvider } from './context/cartContext';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import Order from "./components/Order";
import Error from "./components/Error";



function App() {

  return (
    
      <CartProvider>
        <BrowserRouter>
          <NavBar /> 
            <Switch> 
              <Route exact path='/'>
                <ItemListContainer />
              </Route> 
              <Route path="/category/:catId">
              <ItemListContainer />
              </Route>
              <Route path="/item/:itemId">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path='*'>
                <Error />
              </Route>
            </Switch>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
