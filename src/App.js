import './App.css';
import Home from "./components/home/Home";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/BLog";
import NotFound from "./components/notFound/NotFound";
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
