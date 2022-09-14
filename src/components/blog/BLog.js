import './Blog.css'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import {Link} from "react-router-dom";

function Blog() {



    return(
        <>
            <Navbar/>
            <div className={"blog-container"}>
                <div>
                    <h1>My Blogs</h1>
                </div>
                <div className={'part1'}>
                    <div className={"blog-links"}>

                        <div className={'blog'}><Link to="/"> aaa</Link></div>
                        <div className={'blog'}><Link to="/"> aaa</Link></div>
                        {/*<div className={'blog'}><Link to="/"> aaa</Link></div>*/}
                        {/*<div className={'blog'}><Link to="/"> aaa</Link></div>*/}

                    </div>

                    <div className={"my-channel"}>
                        <h3>NEWSLETTER</h3>
                        <p>Subscribe to my channel in telegram <Link to={{pathname: "//t.me/faz1iddinBLog"}}>@faz1iddinBlog</Link></p>
                    </div>
                </div>



            </div>
            <Footer/>
        </>


    )
}

export default Blog