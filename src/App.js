import React, {useEffect, useState} from 'react';
import './App.css';
import {HomePage} from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import {ShopPage} from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import {SignInAndSignUpPage} from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils'

function App() {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
    }, []);

    return (
        <div>
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInAndSignUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
