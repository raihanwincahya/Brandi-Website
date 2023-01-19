import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import Shop from '../shop/Shop';
import CartPage from '../shop/Header/cart/CartPage';
import Profile from '../profile/Profile';
import SignIn from '../registration/SignIn';
import SignUp from '../registration/SignUp';

const PublicRoute = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route index element={<Navigate to='/sign-in' />} />
        </Routes>
    )
}

export default PublicRoute;