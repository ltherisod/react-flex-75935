import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import NavbarComponent from './components/NavbarComponent'
import Contador from './ejemplos/Contador'
import FetchApi from './ejemplos/FetchApi'
function App() {

console.log('Soy App')
  return (
    <>
      <NavBarBootstrap/>
    <FetchApi/>
      <ItemListContainer greeting='Bienvenidos' />
      {/* <Contador/> */}
    </>
  )
}

export default App
