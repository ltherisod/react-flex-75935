import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import NavbarComponent from './components/NavbarComponent'
import Contador from './ejemplos/Contador'
import FetchApi from './ejemplos/FetchApi'
//hoc
import WithDataFetch from './hoc/WithDataFetch'
import FetchHoc from './ejemplos/FetchHoc'
import MouseTracker from './ejemplos/MouseTracker'
function App() {
  //envolver el componente para el HOC
  const FetchWrapped = WithDataFetch(FetchHoc, 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
console.log('Soy App')
  return (
    <>
      <NavBarBootstrap/>
      <MouseTracker render={(mouse)=>(
        <h2>Posicion del mouse: X: {mouse.x}, Y: {mouse.y}</h2>
      )}/>
      <FetchApi/>
      <FetchWrapped/>
      <ItemListContainer greeting='Bienvenidos' />
      {/* <Contador/> */}
    </>
  )
}

export default App
