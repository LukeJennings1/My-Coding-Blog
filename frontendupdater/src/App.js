import './App.css';
import {useState, useEffect} from 'react'

function App() {

//   const Submitnewarticle = async () => {
//     const fetchedData = await fetch('http://localhost:3001/posts') // fetch the api

// }
//   Submitnewarticle()
  const [apiData, setApiData] = useState([]);

const [BlogTitle, SetBlogTitle] = useState()
const [BlogSubTitle, SetBlogSubTitle] = useState()
const [BlogBody, SetBlogBody] = useState()
const newBlogPostdata = {
  BlogTitle,
  BlogSubTitle,
  BlogBody,
}
const [blogarticleposts, setblogarticleposts] = useState([])
const [blogarticlcomments, setblogarticlecomments] = useState([])


useEffect(() => {
  const fetchblogposts = async () => { // fetches blog posts from the blog post api
    const fetchapiaddress = await fetch('https://my-blog.up.railway.app/posts')
    fetchapiaddress.json().then((result) => {setblogarticleposts(result)}).catch((err) => console.log(err))
  }
  const fetchblogcomments = async () => {
    const fetchapiaddress = await fetch('https://my-blog.up.railway.app/comments')
    fetchapiaddress.json().then((result) => {setblogarticlecomments(result); console.log(result)}).catch((err) => {console.log(err)})
  } 
  fetchblogcomments()
  fetchblogposts()
},[]);

  const newblogpost = async (e) => { 
    console.log(BlogTitle,BlogBody,BlogSubTitle)
    e.preventDefault();
    const fetchposts = await fetch('https://my-blog.up.railway.app/newarticle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlogPostdata)
    })
  }




  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type = 'Text' placeholder='Blog Title' onChange={(e) => {SetBlogTitle(e.target.value)}} name = 'blogTitle'></input>
          <input type = 'Text' placeholder='Blog Title' onChange={(e) => {SetBlogSubTitle(e.target.value)}} name = 'blogSubTitle'></input>
          <textarea placeholder='Blog Title' onChange={(e) => {SetBlogBody(e.target.value)}} name = 'blogSubTitle'></textarea>
          <input type = 'submit' onClick={(e) => {newblogpost(e)}}></input>
        </form>
      </header>
      <div>
        {blogarticlcomments.map((item) => {
          return (
            <div key = {item._id}>
              <div>{item.username}</div>
              <div>{item.message}</div>
              <form action='https://my-blog.up.railway.app/deletecomment' method='POST'>
                <input type="hidden"  name = 'id' value={item._id}></input>
                  <button type='submit' placeholder='Delete'>Delete Comment</button>
              </form>
            </div>
          )
        })}
      </div>

      <div>{blogarticleposts.map((item) => {
        console.log(item)
        return (
          <div key={item._id}>
            {item.blogTitle}
             <form action='https://my-blog.up.railway.app/delete' method='POST'>
               <input type="hidden" name = 'id' value={item._id}></input>
                  <button type='submit' placeholder='Delete'>Delete Post</button>
                </form>
          </div>
        )
      })}</div>
    </div>
  );
}






export default App;
