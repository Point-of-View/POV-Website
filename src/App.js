import { useState, useEffect } from 'react';
import './App.css';
import Article from './components/article';


const DUMMY_DATA = true

function getDummyData(updateOriginal, updateTranslated) {
  setTimeout(() =>{
    let responseData = {article: 'asdfk jadls;kfj ;lkadsjf;kladsjf k;lsadjfl;adjs f;klajlk;df'}
    updateOriginal(responseData.article);

    setTimeout(() =>{
      let responseData = {article: 'dasfdksfjk;ldasjfkl;adsjfkl;j\\n\\nas;ldkfjak;dlsjfkl;dsaj f;lksadj f'}
      updateTranslated(responseData.article);
    }
    , 5000)
  }
  , 1000)
}


function App() {

  const [original, updateOriginal] = useState("")
  const [translated, updateTranslated] = useState("")

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
    updateTranslated(responseData2.ARTICLE);
}

  useEffect(() => {
    getText()
  }, [])


    return (
      <div className="App">
        <main>
          <Article text={original} time={"1s"} type={"Original"} />
          <Article text={translated.replaceAll("\\n", '\n')} time={"60s"} type={"Translated"} />
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
