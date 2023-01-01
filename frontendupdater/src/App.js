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

  // const blogPostFetch = async() => {
  //   const data = await fetch('http://localhost:3001/posts')
  //   data.json().then((result) => {console.log(result)})
  // }
  // blogPostFetch()

  const newblogpost = async (e) => {
    console.log(BlogTitle,BlogBody,BlogSubTitle)
    e.preventDefault();
    const fetchposts = await fetch('http://localhost:3001/newarticle', {
      
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
    </div>
  );
}

export default App;
