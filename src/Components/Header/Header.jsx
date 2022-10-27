import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import logo from '../../img/logo.jpg'

import LiftSideNav from '../LeftSide/LiftSideNav';
import './Header.css'

 

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='logo'><img src={logo} alt="" /></Link>
                    <Navbar.Brand href="#home">Online Courses</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/courses'>Courses</Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'> login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                            </>
                            <Link to='/profile'>
                                {user?.photoURL && user.photoURL ?

                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LiftSideNav></LiftSideNav>
                        </div>
                    </Navbar.Collapse>
                    <div>

                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;