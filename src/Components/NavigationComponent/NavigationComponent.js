import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GenericComponent from '../GenericComponent/GenericComponent';
import InputComponent from '../InputComponent/InputComponent';
import UserComponent from '../UserComponent/UserComponent';

class NavigationComponent extends React.Component{
    render(){
        return(
            <div>
                <a href="/Contact">Contact</a>&nbsp;
                <a href="/About">About</a>&nbsp;
                <a href="/">Home</a>&nbsp;
                <a href="/Users">Users</a>
                <div className='applyPadding'>
                    <Router>
                        <Routes>
                            <Route path="/Contact" element={<GenericComponent pageName="Contact"/>}></Route>
                            <Route path="/About" element={<GenericComponent pageName="About"/>}></Route>
                            <Route path="/" element={<InputComponent />}></Route>
                            <Route path="/Users" element={<UserComponent />}></Route>
                        </Routes>
                    </Router>
                </div>
            </div>

        )
    }
}

export default NavigationComponent;