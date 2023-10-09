import linkedin1 from "../Styles/img/Linkedin1.svg"
import github1 from "../Styles/img/github1.svg"
import wpp1 from "../Styles/img/whatsapp1.svg"
import gmail1 from "../Styles/img/envelope-open1.svg"
import "../Styles/footer.css"

export default function Footer() {
    return(
        <div className="box">
            <div>
                <p>Page Create By Paula Yedro
copyright 2023 All rights reserved.</p>
            </div>
            <div>
                <a><img src={linkedin1}></img></a>
                <a><img src={wpp1}></img></a>
                <a><img src={github1}></img></a>
                <a><img src={gmail1}></img></a>
            </div>
        </div>
    )
}