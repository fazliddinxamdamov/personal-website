import './App.css';
import Home from "./components/home/Home";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import NotFound from "./components/notFound/NotFound";
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/portfolio' element={<Portfolio/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='*' element={NotFound}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
