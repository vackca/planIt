import React from 'react';
import MainPage from "../features/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../features/LoginPage/LoginPage";

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
        </Routes>
    );
}

export default App;
