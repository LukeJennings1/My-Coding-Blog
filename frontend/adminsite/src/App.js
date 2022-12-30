import './App.css';
import {useState, useEffect} from 'react';
import IndividualPost from './IndividualPost';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Footer from './footer';

function App() {
  const [apiData, setApiData] = useState([]);


  useEffect(() => {
    const data = async() => { 
    const fetchedData = await fetch('http://localhost:3001/posts') // fetch the api
    fetchedData.json().then(result => {
      setApiData(result)
      console.log(result)
    })
    // const jsonConversion = await dataFetch.json().then((result) => {setApiData(result)}) // convert json   
  }
  data()
  },[]);

  return (
    <div className="App">
      <div className= 'blog-title-wrapper'>
        <h1>Luke's Coding Blog</h1>

      </div>

        <div id="sub-heading-wrapper">
        <h2 id = 'sub-heading-heading'>From Beginner</h2>
        <h2 id = 'sub-heading-heading'>&nbsp; &nbsp; to Professional</h2>
        <p id = 'sub-heading-content'> Read, comment and digest my short blog posts that focus on learning to code.  </p>
        </div>  

        <div className='blog-articles-page-wrapper'>
          {apiData.map((element, index) => { // this is the structure of each blog card with info rendered from the api call. 
            return (
            <div className='blog-articles-wrapper' key={index}>
                <h2 className='blog-article-title'>{element.blogTitle}</h2>
                <p className='blog-article-body'>{element.blogSubTitle}</p>
                
               <Link 
                  to = { `/posts/${element._id}`}
                  state = {[element.blogTitle, element.blogSubTitle, element.blogBody]}
                  className = 'blog-article-link-button' >

                 <div id = 'blog-article-read-more-button'>View Article</div>
               </Link>
                
            </div>
            )
          })}
        </div>
          <Footer />
    </div>
  );
}

export default App;
