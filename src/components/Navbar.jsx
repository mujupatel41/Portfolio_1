import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/MP.png";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between py-6 text-white">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                <img src={Logo} className="mx-2" width={50} height={53} alt="Logo" />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/mujupatel41" aria-label="LinkedIn"
                    target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

                <a href="https://github.com/mujupatel41" aria-label="GitHub"
                    target="_blank" rel="noopener noreferrer"><FaGithub /></a>

                <a href="https://www.instagram.com/mujupatel41" aria-label="Instagram"
                    target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

                <a href="https://x.com/mujupatel41" aria-label="X"
                    target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            </div>
        </nav>
    )
}
