import './App.css';
import Home from "./components/home/Home";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/BLog";
import NotFound from "./components/notFound/NotFound";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogItem from "./components/blog/BLogItem";
import {useEffect, useState} from "react";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "./firebase-config";
import LoadingIndicator from "./components/common/LoadingIndicator";


function App() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const blogsControllerRef = collection(db, 'blog')


    useEffect(() => {

        const getBlogs = async () => {
            if (blogs.length === 0) {
                const query2 = query(blogsControllerRef, orderBy("order", "desc"))
                const data = await getDocs(query2);
                setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
                // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
                setLoading(false)
            }
        }
        getBlogs();

    }, [])


    return (
        <div>
            {
                loading ? <LoadingIndicator/>
                    :
                    <div className="App">
                        <Router>
                            <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route exact path='/blog' element={<Blog blogs={blogs}/>}/>
                                <Route path='/blog/:title' element={<BlogItem blogs={blogs}/>}/>
                                <Route path='/portfolio' element={<Portfolio/>}/>
                                <Route path='/about' element={<About/>}/>
                                <Route path='*' element={<NotFound/>}/>
                            </Routes>
                        </Router>
                    </div>
            }
        </div>


    );
}

export default App;
