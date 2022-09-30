import './BlogItem.css'
import {useParams} from "react-router-dom";
import {collection, getDocs, query, where, orderBy, limit} from "firebase/firestore";
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

    const {name} = useParams();
    const [blog , setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const blogControllerRef = collection(db, 'blog')

    useEffect(() => {
        const getBlogById = async () => {

            // const q = query(blogControllerRef, where("order", "==", id.toNumber() , orderBy("title", "asc"), limit(1)));
            // const querySnapshot = await getDocs(q);
            // setBlog(querySnapshot);
            setLoading(false);
            // querySnapshot.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     // console.log(doc.id, " => ", doc.data());
            //     setBlog(doc.data())
            //     setLoading(false);
            // });

        }
        getBlogById();
    }, [name])

    return(
        <div>
            <Navbar/>

            {loading ? <LoadingIndicator/>
            :
                <div>
                    <div className={"blog-item"}>
                        <div className={"blog-item-image"}>
                            <img src={blog.image_url} alt="Image not found :("/>
                        </div>

                    </div>

                    <Footer/>
                </div>

            }

        </div>

    )
}

export default BlogItem