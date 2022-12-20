import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action='/PostCreation' method='POST'>
          <input type = 'Text' placeholder='Blog Title' name = 'blogTitle'></input>
          <input type = 'Text' placeholder='Blog Title' name = 'blogSubTitle'></input>
          <textarea placeholder='Blog Title' name = 'blogSubTitle'></textarea>
          <input type = 'submit'></input>
        </form>
      </header>
    </div>
  );
}

export default App;
