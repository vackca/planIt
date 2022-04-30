import React from 'react';
import MainPage from "../features/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../features/LoginPage/LoginPage";
import {createTheme, ThemeProvider} from "@mui/material";
import {blueGrey} from "@mui/material/colors";

const theme = createTheme({
palette:{
    primary: blueGrey,
}
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="*" element={<MainPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
