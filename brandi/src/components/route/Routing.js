import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from './PublicRoute';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<PublicRoute />} />
            </Routes>
        </>
        
    )
}

export default Routing;