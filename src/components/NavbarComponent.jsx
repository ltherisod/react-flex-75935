import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
    console.log('Soy el navbar')
    return(
        <nav className='navContainer' style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <NavLink className='navlink' to='/'>
                <img src='../logo.png' alt='logo' style={{width:'15rem'}}/>
            </NavLink>
            <NavLink className='navlink' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='navlink' to="/category/mas vendidos">Mas vendidos</NavLink>
            <NavLink className='navlink' to="/category/ofertas">Ofertas</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default NavbarComponent
