import './App.css';
import Home from "./components/home/Home";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LayoutManager from "./Layouts/LayoutManager";

function App() {
  return (
    <div className="App">
        <Router>
           <LayoutManager>
               <Routes>
                   <Route exact path='/' element={<Home/>} />
                   <Route exact path='/portfolio' element={<Portfolio/>} />
                   <Route exact path='/about' element={<About/>} />
               </Routes>
           </LayoutManager>
        </Router>
    </div>
  );
}

export default App;
