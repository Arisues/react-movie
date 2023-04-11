import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import LoggedIn from "./components/LoggedIn/LoggedIn"

import LoginForm from "./components/LoginForm/LoginForm"
import { useState } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
    // return (
    //     <BrowserRouter>
    //         <Route render={props => (
    //             <>
    //                 <Header {...props}/>
    //                 <Routes/>
    //                 <Footer/>
    //             </>
    //         )}/>
    //     </BrowserRouter>
    // );
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
