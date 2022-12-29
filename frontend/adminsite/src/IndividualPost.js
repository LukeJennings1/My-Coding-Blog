import { useLocation, Link, json } from 'react-router-dom';
import homeIcon from '/Users/mac1/Node.JS/My-Coding-Blog/frontend/adminsite/src/Assets/homeicon.png';
import Footer from './footer';
import {useState, useEffect} from 'react'

function IndividualPost() {

const [username, SetUsername] = useState();
const [message, setMessage] = useState();
const [hasSubmittedMessage, sethasSubmittedMessage] = useState(false);
const blog = useLocation();
const dataToSubmit = {
    username,
    message,
    URLid: window.location.pathname
}
const [blogPostComments, setblogPostComments] = useState([]);

    useEffect(() => {
         fetch('http://localhost:3001/comments').then((res) => {return (res.json())})
         .then((res) => setblogPostComments(res))
    },[hasSubmittedMessage])

    const submitHandler =  async (e) => {
            e.preventDefault()
             const push = await fetch('http://localhost:3001/blogComment',
             {  
                method: "POST",
                headers: {'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST'},
                body: JSON.stringify(dataToSubmit)
        }).then(sethasSubmittedMessage(true))
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
        <div>{blogPostComments && blogPostComments.map((data) => {
            if (data.URLid === window.location.pathname){
                
            return <div key={data._id}>
                <h2>{data.username}</h2>
                <h3>{data.message}</h3>

                </div>
        }
        })}</div>

    <div id = 'blog-content-wrapper'>
            <h1>{blog.state[0]}</h1>
            <h2>{blog.state[1]}</h2> 
            <h3>{blog.state[2]}</h3>
    </div>

        <form id = 'add-comment-to-post' >
            <h1 id = 'input-comment-title'>Leave a comment</h1>
            <input type='text' id = 'name-post' name = 'username' placeholder='Name' onChange={(e) => {SetUsername(e.target.value)}}></input>
            <textarea type='text' id = 'textarea-post' rows='4' col = '10' name = 'message' placeholder='Message' onChange={(e) => {setMessage(e.target.value)}}></textarea>
            <button type ='submit' disabled={hasSubmittedMessage} onClick={(e) => {submitHandler(e)}} >Submit</button>
        </form>
        </div>
    <Footer />

        </div>

    )
}


export default IndividualPost;