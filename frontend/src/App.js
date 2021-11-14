import './App.css';

import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom"

import React from "react"

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import { useDarkMode } from "./Components/useDarkMode"

import Navbar from './Components/Navbar';

const App = () => {

    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (

        <ThemeProvider theme={themeMode}>

            <GlobalStyles />

            <Router>

                <Navbar toggle={themeToggler} theme={theme}/>
                <Routes>
                    <Route path="/projects" element={<div>Projects</div>}>
                    </Route>
                    <Route path="/" element={<div>Home</div>}>
                    </Route>
                    <Route path='*' element={<div>Not Found</div>}>
                    </Route>
                </Routes>

                <div>
                    <i>Copyright 2021</i>
                </div>

            </Router>
            
        </ThemeProvider>
    )
}

export default App;
