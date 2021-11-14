import './App.css';
import {
    BrowserRouter as Router,
    Routes, Route, Link,
    useLocation
} from "react-router-dom"

import Navbar from './Components/Navbar';

const Location = () => {
    const location = useLocation()
    console.log(location);
    return(
        <div>
            {location.pathname}
        </div>
    )
}

const App = () => {

    return (
        <Router>

            <Navbar/>

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
                <Location/>
            </div>

        </Router>
    )
}

export default App;
