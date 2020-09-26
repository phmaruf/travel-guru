import React from 'react';
import logo from '../../Images/Logo.png';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="d-flex justify-content-around">
       
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/home">
                <img style={{height: '40px', width: '100px'}} src={logo} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline >
                    <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                    {/* <Button variant="outline-success">Search</Button> */}
                </Form>
                <Nav className="mr-auto">
                    
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="/destinationDetails">Destination</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="/home">Contact</Nav.Link>
                    <Button  variant="warning" href="/login">Login</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
       
        </div>
    );
};

export default Header;