import './Blog.css'
import {useParams} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase-config";
import {useEffect, useState} from "react";
import LoadingIndicator from "../common/LoadingIndicator";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

class Blog {
    constructor (title, description, image_url, createdAt , order) {
        this.title = title;
        this.description = description;
        this.image_url = image_url;
        this.createdAt = createdAt;
        this.order = order;
    }
}


function BlogItem() {

    const {id} = useParams();
    const [blog , setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const blogControllerRef = collection(db, 'blog')

    useEffect(() => {
        const getBlogById = async () => {

            const q = query(blogControllerRef, where("order", "==", 1));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setBlog(doc.data())
                setLoading(false);
            });

        }
        getBlogById();
    }, [id])

    return(
        <div>
            <Navbar/>

            {loading ? <LoadingIndicator/>
            :
                <div>
                    <img src={blog.image_url} alt=""/>

                    {/*{blog.title}*/}
                </div>
            }

            <Footer/>

        </div>

    )
}

export default BlogItem