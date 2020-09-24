import React from 'react';
import {Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavForm = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">devBlog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/"><Nav className="nav-link">Home</Nav></Link>
                    <Link to="/board"><Nav className="nav-link">Board</Nav></Link>
                    <Link to="/notice"><Nav className="nav-link">Notice</Nav></Link>
                    <Link to="/login"><Nav className="nav-link">Login</Nav></Link>
                </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavForm;


