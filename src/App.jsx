import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import ItemDetailContainer from './components/ItemDetailContainer'
import ErrorPage from './components/ErrorPage'
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import CheckoutReactHookForm from './components/CheckoutReactHookForm'
function App() {

console.log('Soy App')
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarBootstrap/>
      {/* <NavbarComponent/> */}
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Seleccionaste la categoria:' />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<CheckoutReactHookForm/> }/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </CartProvider>
      </BrowserRouter>
  )
}

export default App
