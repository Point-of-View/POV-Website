import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [translated, updateTranslated] = useState("")

  async function getText() {
    let params = (new URL(document.location)).searchParams;
    let url = params.get("url");
    let bias = params.get("bias")

    // const response = await fetch(`http://127.0.0.1:5000/?url=${url}&bias=${bias}`);
    // const responseData = await response.json();
    setTimeout(() =>{
      let responseData = {article: 'Placeholder text Placeholder text Placeholder text Placeholder text '}
      updateTranslated(responseData.article);
    }
    , 3000)

}

  useEffect(() => {
    getText()
  }, [])

  if (translated) {
    return (
      <div className="App">
        <p>{translated}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div id="loading-screen"></div>
    </div>
  );
}

export default App;
