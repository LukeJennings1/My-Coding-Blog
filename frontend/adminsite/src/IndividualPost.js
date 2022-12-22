import { useLocation, Link } from 'react-router-dom';
import homeIcon from '/Users/mac1/Node.JS/My-Coding-Blog/frontend/adminsite/src/Assets/homeicon.png';
import Footer from './footer';

function IndividualPost() {
    const blog = useLocation()

    // function sendForm(e){
    //     let input = e.target
    //     input.submit()
    //     e.preventDefault();
    // }

        const fetchcomments = async () => {
            // const fetcher = await fetch('http://localhost:3001/comments')
            // fetcher.json().then((result) => {console.log(result)})
        }
        const submitHandler =  (e) => {
            e.preventDefault()
             fetch('http://localhost:3001/blogComment', {method: "POST"})
             .then((result) => {console.log(result)})
        }
    

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

        <div className='content-wrapper'>

    <div id = 'blog-content-wrapper'>
            <h1>{blog.state[0]}</h1>
            <h2>{blog.state[1]}</h2> 
            <h3>{blog.state[2]}</h3>
    </div>

        <form action='http://localhost:3001/blogComment' method='POST' id = 'add-comment-to-post' onSubmit={e => {submitHandler(e)}} >
            <h1 id = 'input-comment-title'>Leave a comment</h1>
            <input type='text' id = 'name-post' name = 'username' placeholder='Name'></input>
            <textarea type='text' id = 'textarea-post' rows='4' col = '10' name = 'message' placeholder='Message'></textarea>
            <button type ='submit' onClick = {() => { fetchcomments()}} >Submit</button>
        </form>
        </div>
    <Footer />

        </div>
       
    )
}


export default IndividualPost;