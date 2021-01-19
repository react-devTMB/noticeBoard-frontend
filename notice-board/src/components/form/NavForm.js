import React, { createContext, useContext } from 'react';
import {Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
import UserContext from '../context/User.context';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';

const NavForm = () => {

    let userName = "";  //  사용자 이름
    const { userInfo, isAuthenticated } = useContext(UserContext);

    if(isAuthenticated) {
        userName = JSON.parse(userInfo).name;
    }

    const logout = () => {
        window.localStorage.clear();
        window.location.href = '/';
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('userInfo');

        createContext(null) // UserContext 초기화
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">devBlog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/"><Nav className="nav-link">Home</Nav></Link>
                    <Link to="/write"><Nav className="nav-link">Board</Nav></Link>
                    <Link to="/notice"><Nav className="nav-link">Notice</Nav></Link>
                </Nav>
                {
                    isAuthenticated ? (
                        <Nav>
                            <div className="nav-link">
                                <strong className="username"> { userName } </strong>
                                <span>님</span>
                            </div>
                            <div className="nav-link">
                                <span><PersonOutlineIcon></PersonOutlineIcon>My info</span>
                            </div>
                            <Link to="/post">
                                <div className="nav-link"><span><CreateIcon></CreateIcon>Post</span> </div>
                            </Link>
                            <div className="nav-link tmb_margin_20" onClick={ logout }>
                                <span><ExitToAppIcon></ExitToAppIcon>Logout</span>
                            </div>
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
