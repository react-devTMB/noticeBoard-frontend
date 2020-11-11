import React, { useContext, useEffect, useState } from 'react';
import {Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { isNull } from '../common/Util';
import UserContext from '../context/User.context';

const NavForm = (value) => {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    const userInfos = useContext(UserContext);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        console.log('userInfos >> ' , userInfos);
        if(!isNull(userInfos)) {
            console.log('userInfos.name >> ' , userInfos.name);
            if(userInfos.name !== "") {
                setUserName(userInfos.name);
            }
        }
        return () => {}
      }, [userInfos])


    


    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">devBlog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/"><Nav className="nav-link">Home</Nav></Link>
                    <Link to="/board"><Nav className="nav-link">Board</Nav></Link>
                    <Link to="/notice"><Nav className="nav-link">Notice</Nav></Link>
                </Nav>
                <Nav>
                    { userName === "" &&<Link to="/login"><Nav className="nav-link">Login</Nav></Link>}
                    { userName !== "" &&  <div >{ userName }</div>}
                    <Link to="/signUp"><Nav className="nav-link tmb_margin_20">Sign up</Nav></Link>
                    { userName !== "" && <div onClick={ logout }>Logout</div>}
                    {/* <Link to="/home"><Nav className="nav-link tmb_margin_20">Logout</Nav></Link> */}
                </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavForm;


