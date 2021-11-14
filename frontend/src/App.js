import './App.css';
import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom"

const App = () => {
    const padding = {
        padding: 5
    }

    return (
        <Router>
            <div>
                <Link style={padding} to="/">Home</Link>
                <Link style={padding} to="/projects">Projects</Link>
            </div>

            <Routes>
                <Route path="/projects" element={<div>Hello</div>}>
                </Route>
                <Route path="/" element={<div>Home</div>}>
                </Route>
                <Route path='*' element={<div>Not Found</div>}>
                </Route>
            </Routes>

            <div>
                <i>Note app, Department of Computer Science 2021</i>
            </div>
            
        </Router>
    )
}

export default App;
