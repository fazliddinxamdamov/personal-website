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

                        <Link to="/blog/api-ozi-nima">
                            <div className={'blog'}>
                                <div>
                                    <img src="https://miro.medium.com/max/875/1*_6Zxe5-EGDkbLlrqIeTsIA.png" alt="Photo not found"/>
                                </div>
                                <div>
                                    <p>15 Sep</p>
                                    <br/>
                                    <h2>API o'zi nima?</h2>
                                    <br/>
                                    <p>(Application Programming Interface) API — bu Application Programming Interface qisqartmasi bo’lib, u ikkita ilovaga bir-biri bilan gaplashish imkonini beruvchi dasturiy vositachi hisoblanadi. Har safar...</p>
                                </div>
                            </div>
                        </Link>

                        <br/>

                        <Link to="/blog/agile-metodologiyasi">
                            <div className={'blog'}>
                                <div>
                                    <img src="https://miro.medium.com/max/588/1*_2b6wH3mJ8RkW9BMvY-ydw.png" alt="Photo not found"/>
                                </div>
                                <div>
                                    <p>10 Sep</p>
                                    <br/>
                                    <h2>Agile metodologiyasi</h2>
                                    <br/>
                                    <p>Ushbu maqolada biz Agile metodologiyasi haqida qisqacha tanishib chiqamiz. Agile metodologiyasi — bu loyihani bir necha bosqichlarga bo’lish orqali boshqarish usuli. Bunga manfaatdor tomonlar bilan doim...</p>
                                </div>
                            </div>
                        </Link>


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