import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login';
import Home from './pages/HomePage/HomePage';


export const Routes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={Login} />
                <Route exact path="/home" element={Home} />
            </Routes>
        </div>
    );
};