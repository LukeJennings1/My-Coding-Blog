import { useLocation, Link } from 'react-router-dom';
import homeIcon from '/Users/mac1/Node.JS/My-Coding-Blog/frontend/adminsite/src/Assets/homeicon.png';
import Footer from './footer';

function IndividualPost() {
    const blog = useLocation()

    return (
        <div id = 'individualPost-page-wrapper'>
            <div className= 'blog-title-wrapper' id = 'post-header'>
                <Link to = '/' className='blog-article-link-button'>
                 <h1>Luke's Coding Blog</h1>
                </Link>
                <Link to = '/'>
                <img alt='Home Icon' id = 'home-icon' src={homeIcon}></img>
                </Link>
            </div>

    <div id = 'blog-content-wrapper'>
            <h1>{blog.state[0]}</h1>
            <h2>{blog.state[1]}</h2> 
            <h3>{blog.state[2]}</h3>
    </div>

        <form action='http://localhost:3001/blogComment' method='POST' id = 'add-comment-to-post'>
            <input type='text' name = 'username' placeholder='Username'></input>
            <textarea type='text' name = 'message' placeholder='Message'></textarea>
            <input type='submit'></input>
        </form>

    <Footer />

        </div>
       
    )
}


export default IndividualPost;