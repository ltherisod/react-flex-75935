import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function NavBarBootstrap() {
  const {cart}=useCart()
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
        <img src='../logo.png' alt='logo' style={{width:'8rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/nuevos'>Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/mas vendidos'>
                Más Vendidos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Una forma de hacerlo */}
           {/* { cart.length && <NavLink to='/cart' style={{textDecoration:'none'}}><CartWidgetIcons/></NavLink>} */}
          <NavLink to='/cart' style={{textDecoration:'none'}}><CartWidgetIcons/></NavLink> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBootstrap;