import './Blog.css'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import moment from "moment";
import {useEffect, useState} from "react";
import {db} from "../../firebase-config";
import {collection, getDocs} from 'firebase/firestore'
import LoadingIndicator from "../common/LoadingIndicator";

function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const blogsControllerRef = collection(db, 'blog')

    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogsControllerRef);
            setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            setLoading(false)
            // console.log(data.docs[0]._document.data.value.mapValue.fields)
            // console.log(data.docs[1]._document.data.value.mapValue.fields)
            // console.log(data.docs[1]._document.data.value.mapValue.fields.title.stringValue)
        }
        getBlogs();
    }, [])

    return (
        <>
            {loading ? <LoadingIndicator/>
                :
                <>
                    <Navbar/>
                    <div className={"blog-container"}>
                        <div><h1>My Blogs</h1></div>
                        <div className={'part1'}>
                            <Fade>
                                <div className={"blog-links"}>

                                    {blogs.map((blog) => {
                                        return (
                                            <Link to={"/blog/" + blog.order}>
                                                <div className={'blog'}>
                                                    <div><img src={blog.image_url} alt="Photo not found"/></div>
                                                    <div>
                                                        <p>{moment(blog.createdAt.seconds * 1000).format("MMM D")}</p>
                                                        <br/>
                                                        <h2>{blog.title}</h2>
                                                        <br/>
                                                        {/*<p>{blog.description}</p>*/}
                                                        <p className={"blog-description"}>Lorem ipsum dolor sit amet,
                                                            consectetur adipisicing elit. Dolore expedita, facere illum ipsum
                                                            laudantium nihil officia pariatur praesentium temporibus voluptatem!
                                                            Deserunt dolore facilis iure modi quidem totam. Iste, non,
                                                            similique.lorem Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Aperiam aspernatur cupiditate, hic inventore officiis omnis
                                                            quam quia. Aliquam autem, eveniet explicabo fugiat fugit ipsum neque
                                                            obcaecati perspiciatis, repellat sed, velit? </p>
                                                    </div>
                                                </div>
                                                <br/>
                                            </Link>

                                        )
                                    })}
                                </div>
                            </Fade>

                            <Swing>
                                <div className={"my-channel"}>
                                    <h3>NEWSLETTER</h3>
                                    <p>Subscribe to my channel in telegram <Link
                                        to={{pathname: "//t.me/faz1iddinBLog"}}>@faz1iddinBlog</Link></p>
                                </div>
                            </Swing>

                        </div>
                    </div>
                    <Footer/>
                </>
            }
        </>


    )
}

export default Blog