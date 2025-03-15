import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import ItemDetailContainer from './components/ItemDetailContainer'
import ErrorPage from './components/ErrorPage'

function App() {

console.log('Soy App')
  return (
    <BrowserRouter>
      <NavBarBootstrap/>
      {/* <NavbarComponent/> */}
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Seleccionaste la categoria:' />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
     
      </BrowserRouter>
  )
}

export default App
