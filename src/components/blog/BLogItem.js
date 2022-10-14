import './BlogItem.css'
import {useParams} from "react-router-dom";
import {collection, getDocs, orderBy, query} from 'firebase/firestore'

import {db} from "../../firebase-config";
import {useEffect, useState} from "react";
import LoadingIndicator from "../common/LoadingIndicator";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function BlogItem(blogs) {

    const {title} = useParams();
    const [blog, setBLog] = useState(null);
    const [loading, setLoading] = useState(true);

    const replace = (title) => {
        return String(title.toString().replaceAll("-", " "))
    }

    useEffect(() => {
        const getBlog = () => {
            console.log("enter getBlog()")
            blogs.blogs.map(value => {
                console.log(value)
                console.log(title.toString())
                if (value.title === replace(title)) {
                    console.log("Title titlega to'g'ri keldi")
                    setBLog(value)
                    setLoading(false);
                } else {
                    setLoading(false)
                    console.log("Title titlega to'g'ri kelmadi")
                }
            })
        }
        getBlog();

    }, [title])


    return (
        <div>
            <Navbar/>
            {loading ? <LoadingIndicator/>
                :
                <div className={'blog-item-wrapper'}>
                    <div className={"blog-item"}>


                        <div>
                            <div>
                                <h1>{blog.title}</h1>
                            </div>
                            
                        </div>

                        <div className={"blog-item-img"}><img src={blog.image_url} alt="Image not found :("/></div>

                        <br/>

                        <div><p>{blog.small_description}</p></div>
                        <br/>
                        <div className={'blog-item-description'}><p>{blog.description}</p></div>

                        <p className={'blog-item-type'}>{blog.type}</p>

                    </div>

                    <Footer/>
                </div>

            }

        </div>
    )
}

export default BlogItem