import React from "react";
import "./LoggedIn.css";
import Header from '../header/Header'
import Footer from '../footer/Footer';

import Routes from '../../config/Routes';

import { BrowserRouter, Route } from 'react-router-dom';

const LoggedIn = ({ }) => {
  return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
};

export default LoggedIn;
