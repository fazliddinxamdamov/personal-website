import './Blog.css'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import {Link} from "react-router-dom";
import moment from "moment";

function Blog(blogs) {

    const replace = (title) => {
        return String(title.toString().replaceAll(" ", "-"))
    }

    return (<>
            <Navbar/>
            <div className={"blog-container"}>
                <div><h1 className={'my-blog-h1'}>My Blogs</h1></div>
                <div className={'part1'}>
                        <div className={"blog-links"}>
                            {blogs.blogs.length > 0 ? blogs.blogs.map((blog) => {
                                return (<Link to={"/blog/" + replace(blog.title)}>
                                        <div className={'blog'}>
                                            <div><img src={blog.image_url} alt="Photo not found"/></div>
                                            <div>
                                                <p className={"blog-date"}>
                                                    {moment(blog.createdAt.seconds * 1000)
                                                        .format("MMM D")}
                                                </p>
                                                <br/>
                                                <h2 className={'blog-title'}>{blog.title}</h2>
                                                <br/>
                                                <p className={'blog-description'}>{blog.small_description}</p>

                                                <button className="learn-more">
                                                    <span className="circle" aria-hidden="true">
                                                        <span className="icon arrow"></span>
                                                    </span>
                                                    <span className="button-text">Learn More</span>
                                                </button>

                                                <p className={"blog-type"}>{blog.type}</p>

                                            </div>
                                        </div>
                                        <br/>
                                    </Link>)
                            }) : <div>
                                <h1>Blogs not found</h1>
                            </div>}
                        </div>
                        <div className={"my-channel"}>
                            <h3>NEWSLETTER</h3>
                            <p>Subscribe to my channel in telegram <Link
                                to={{pathname: "//t.me/faz1iddinBLog"}}>@faz1iddinBlog</Link></p>
                        </div>

                </div>
            </div>
            <Footer/>
        </>)
}

export default Blog