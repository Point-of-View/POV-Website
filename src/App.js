import { useState, useEffect } from 'react';
import './App.css';
import Article from './components/article';


const DUMMY_DATA = false

function getDummyData(updateOriginal, updateTranslated) {
  setTimeout(() =>{
    let responseData = {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    updateOriginal(responseData.text);

    setTimeout(() =>{
      let responseData = {ARTICLE: 'Lorem Democrats dolor sit amet, consectetur adipiscing elit, sed Republicans eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                          CHANGES: [['ipsum', 'Democrats', 'I made this change because...'], ['do', 'Republicans', 'This other change was made because']]}
      updateTranslated(responseData);
    }
    , 5000)
  }
  , 1000)
}


function App() {

  const [original, updateOriginal] = useState("")
  const [translated, updateTranslated] = useState({})

  async function getText() {
    if (DUMMY_DATA) {
      getDummyData(updateOriginal, updateTranslated)
      return
    }

    let params = (new URL(document.location)).searchParams;
    let url = params.get("url");
    let bias = params.get("bias")

    const response = await fetch(`http://127.0.0.1:5000/scrape?url=${url}`);
    const responseData = await response.json();
    updateOriginal(responseData.text);

    const response2 = await fetch(`http://127.0.0.1:5000/?url=${url}&bias=${bias}`);
    const responseData2 = await response2.json();
    console.log(responseData2)
    updateTranslated(responseData2);
}

  useEffect(() => {
    getText()
  }, [])


    return (
      <div className="App">
        <main>
          <Article text={original} changes={translated.CHANGES} time={"1s"} type={"Original"} />
          <Article text={translated.ARTICLE?.replaceAll("\\n", '\n')} changes={translated.CHANGES} time={"60s"} type={"Translated"} />
        </main>
      </div>
    );

  // return (
  //   <div className="App">
  //     <div id="loading-screen"></div>
  //   </div>
  // );
}

export default App;
