import './App.css';

import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom"

import React, { useEffect, useState } from "react"

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import { useDarkMode } from "./Components/useDarkMode"

import Navbar from './Components/Navbar/Navbar';
import MobileNavbar from './Components/Navbar/MobileNavbar';

import Homepage from './Components/Pages/Homepage';
import Projects from './Components/Pages/Projects';

const App = () => {

    // Themeing
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    // Mobile
    const [windowWidth, setWindowWidth] = useState(0);

    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };
    
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    let isMobile = false

    if (windowWidth < 780) {
        isMobile = true
    }

    const Nav = isMobile
        ? <MobileNavbar toggle={themeToggler} theme={theme} />
        : <Navbar toggle={themeToggler} theme={theme} />

    return (

        <ThemeProvider theme={themeMode}>

            <GlobalStyles />

            <Router>

                {Nav}

                <Routes>
                    <Route path="/projects" element={<Projects/>}>
                    </Route>
                    <Route path="/" element={<Homepage/>}>
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
