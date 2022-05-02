import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext.jsx';
import { CarritoFinal } from './components/CarritoFinal/CarritoFinal';
import CartWidget from './components/CartWidget/CartWidget';
import {Cart} from './components/Cart/Cart';
import FirebaseGetProduct from './components/ItemDetailContainer/FirebaseGetProduct.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div className="App">
    
    <CartProvider>

      <BrowserRouter>

        <NavBar />

          <Routes>

                  <Route exact path="/" element={ <ItemListContainer/>}  />
                  <Route exact path="/testproductt" element={ <FirebaseGetProduct/>}  />
                  <Route exact path="/item/:id" element={ <ItemDetailContainer /> }  />
                  <Route exact path="/category/:tipo" element={ <ItemListContainer /> }  />
                  <Route exact path="/carritoFinal" element={ <CartWidget /> }  />
                  <Route exact path="/carritoFinal" element={ <CarritoFinal /> }  />
                  <Route exact path="/contact" element={ <Contact /> }  />
                  <Route exact path="/cart" element={ <Cart/> }  />
                  

          {/* <ItemListContainer  greeting='Esta es una prop provisoria del Item List ItemListContainer ' />
          */}
          {/* <ItemDetailContainer /> */}

          </Routes>

      </BrowserRouter>

    </CartProvider>
     
    

    </div>
  );
}

export default App;