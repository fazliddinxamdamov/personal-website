import './Footer.css'
import footerLogo from './footer-logo.jpg'

function Footer() {
    return(
        <div>
            <div className={"footer-container"}>
                <img src={footerLogo} className={"footer-logo"} alt="Footer logo not fonud :("/>
                <p>© localhost:3000</p>
                <span></span>
            </div>
        </div>

    )
}

export default Footer