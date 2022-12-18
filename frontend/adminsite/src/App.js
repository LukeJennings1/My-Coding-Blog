import './App.css';
import {useState, useEffect} from 'react'

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
        <h1 id = 'blog-title'>Luke's Coding Blog</h1>

        <div id="sub-heading-wrapper">
        <h2 id = 'sub-heading-heading'>From Beginner</h2>
        <h2 id = 'sub-heading-heading'>&nbsp; &nbsp; to Professional</h2>
        <p id = 'sub-heading-content'> Read, comment and digest my short blog posts that focus on learning to code.  </p>
        </div>  

        <div className='blog-articles-page-wrapper'>
          {apiData.map((element, index) => { // this is the structure of each blog card with info rendered from the api call. 
            return (
            <div className='blog-articles-wrapper' key={index}>
                <h2 className='blog-article-title'>{element.title}</h2>
                <p className='blog-article-body'>{element.body}</p>
            </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
