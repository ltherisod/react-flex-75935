import CartWidget from './CartWidget'

const NavbarComponent = () => {
    console.log('Soy el navbar')
    return(
        <nav className='navContainer' style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <a className='navlink'href="">
                <img src='./logo.png' alt='logo' style={{width:'15rem'}}/>
            </a>
            <a className='navlink' href="">Nuevos</a>
            <a className='navlink' href="">Mas vendidos</a>
            <a className='navlink' href="">Ofertas</a>
            <CartWidget/>
        </nav>
    )
}

export default NavbarComponent
