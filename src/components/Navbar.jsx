import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Outlet } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <>
            <Navbar style={{ backgroundColor: 'maroon', color: 'white' }} variant="light" className="border-bottom" sticky="top" expand="md">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="text-decoration-none text-white">
                            <strong>ResumeBuilder</strong>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="mx-2 text-decoration-none text-white">Home</NavLink>
                            <NavLink to="/details" className="mx-2 text-decoration-none text-white">Details</NavLink>
                            <NavLink to="/about" className="mx-2 text-decoration-none text-white">About US</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default NavbarComponent;
