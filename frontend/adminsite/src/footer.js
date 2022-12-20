import { Link } from 'react-router-dom'
import githublogo from './Assets/GitHub-Mark-Light-64px.png'


function Footer() {


    return (
        <div id = 'footer-wrapper'>
            <h2>Made By Luke Jennings 2022 </h2>
        <a href = 'https://github.com/LukeJennings1'>
         <img alt='Github Logo' src={githublogo} id = 'githubLogo'></img>
        </a>
        </div>
    )
}

export default Footer;