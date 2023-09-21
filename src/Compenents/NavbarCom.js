import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { useState } from 'react';


let classname = ` nav-item  ${({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
    }`;
function NavbarCom() {
    const [navbar, setNavbar] = useState(false);
    const backgroundColor = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);

        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', backgroundColor);

    const location = useLocation();
    return (
        <Navbar expand="lg" className={navbar ? 'fixed-top nav-active ' : 'bg-trasparent fixed-top'}>
            <Container>
                <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">

                        <NavLink className={` nav-item  ${location.pathname === " /" ? "nav-active" : ""}`} as={NavLink} to={"/"}>Home</NavLink>
                        <NavLink className={` nav-item  ${location.pathname === " /Shop" ? "nav-active" : ""}`} as={NavLink} to={"/Shop"}>Our Shop</NavLink>
                        <NavLink className={` nav-item  ${location.pathname === " /Product" ? "nav-active" : ""}`} as={NavLink} to={"/Product"}>Product</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending nav-item me-0" : isActive ? "active nav-item me-0" : "nav-item me-0"}
                            as={NavLink} to={"/Contact"}>Contact</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending nav-item me-0 sign-in" : isActive ? "active nav-item me-0 sign-in" : "nav-item me-0 sign-in"}
                            as={NavLink} to={"/SignIn"}>Sign In</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavbarCom;