import React, { createContext, useContext } from 'react';
import {Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { isNull } from '../common/Util';
import UserContext from '../context/User.context';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const NavForm = () => {

    const { userInfo, isAuthenticated } = useContext(UserContext);
    let userName = "";

    if(isAuthenticated) {
        if(userInfo !== null && Object.entries(userInfo).length !== 0 && isAuthenticated) {
            userName = JSON.parse(userInfo).name;
        }
    }
    


    const logout = () => {
        window.localStorage.clear();
        window.location.href = '/';
        localStorage.removeItem('access_token');
        localStorage.removeItem('userInfo');
        // UserContext 초기화
        createContext(null)
    }

    

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">devBlog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/"><Nav className="nav-link">Home</Nav></Link>
                    <Link to="/board"><Nav className="nav-link">Board</Nav></Link>
                    <Link to="/notice"><Nav className="nav-link">Notice</Nav></Link>
                </Nav>
                {
                    userName ? (
                        <Nav>
                            <div className="nav-link">
                                <strong className="username"> { userName } </strong>
                                <span>님</span>
                            </div>
                            <div className="nav-link">
                                <span><PersonOutlineIcon></PersonOutlineIcon>My info</span>
                            </div>
                            <div className="nav-link tmb_margin_20" onClick={ logout }>Logout</div>
                        </Nav>
                    ) : (
                        <Nav>
                            <Link to="/login"><Nav className="nav-link">Login</Nav></Link>
                            <Link to="/signUp"><Nav className="nav-link tmb_margin_20">Sign up</Nav></Link>
                        </Nav>
                    )
                }
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavForm;


