import consola from "../Styles/img/Consola.svg"
import linkedin from "../Styles/img/Linkedin.svg"
import github from "../Styles/img/github.svg"
import wpp from "../Styles/img/whatsapp.svg"
import gmail from "../Styles/img/envelope-open.svg"
import button1 from "../Styles/img/Button1.svg"
import Footer from "./Footer"

export default function LandingPage(){
    return(
        <div>
            <img src={consola}></img>
            <div>
                <h1>Microsoft Windows [ Versión 10.0.19043.2364] (c ) Microsoft Corporation. Todos los derechos reservados.
                <br></br>
                <span></span>
                {'>'} Hi!! face-grin-wide My name is Paula Yedro!! <br></br>
                {'>'} I’m FullStack Web Developer,  Frontend Web Developer and Backend Developer.<br></br>
                {'>'} If you are a recruiter ?<br></br>
                {'>'} I invite you to look at my CV  hand-point-dow<br></br>
                <span>| (cursor)</span>
                </h1>
                <button><img src={button1}></img></button>
                <div>
                    <button><img src={linkedin}></img>Linkedin</button>
                    <button><img src={wpp}></img>Whatsapp</button>
                    <button><img src={github}></img>GitHub</button>
                    <button><img src={gmail}></img>Gmail</button>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
};