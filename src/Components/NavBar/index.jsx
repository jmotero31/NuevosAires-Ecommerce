import { Link } from 'react-router-dom';
import CardWidget from '../CartWidget';
import './styles.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <>
        <Link to='/' className="navbar-brand" id="blanco"><img  src='/img/1.jpg' alt="NuevosAires" className="logo" />  Nuevos Aires | Ecommerce</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/category/Electronica' className='nav-link active a' aria-current="page">Electrónica</Link>
            <Link to='/category/Joyas' className='nav-link active a' aria-current="page">Joyas</Link>
            <Link to= "/category/Ropa de Mujer" className='nav-link active a' aria-current="page">Ropa de Mujer</Link>
            <Link to="/category/Ropa de Hombre" className='nav-link active a' aria-current="page">Ropa de Hombre</Link>
          </Nav>
          <CardWidget/>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default NavBar;