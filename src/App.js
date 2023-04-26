import { useState, useEffect } from 'react';
import './App.css';
import Article from './components/article';

function App() {

  const [original, updateOriginal] = useState("")
  const [translated, updateTranslated] = useState("")

  async function getText() {
    let params = (new URL(document.location)).searchParams;
    let url = params.get("url");
    let bias = params.get("bias")

    // const response = await fetch(`http://127.0.0.1:5000/?url=${url}&bias=${bias}`);
    // const responseData = await response.json();
    // updateOriginal(responseData.article);

    // const response2 = await fetch(`http://127.0.0.1:5000/?url=${url}&bias=${bias}`);
    // const responseData2 = await response.json();
    // updateTranslated(responseData.article);



    setTimeout(() =>{
      let responseData = {article: 'asdfk jadls;kfj ;lkadsjf;kladsjf k;lsadjfl;adjs f;klajlk;df'}
      updateOriginal(responseData.article);

      setTimeout(() =>{
        let responseData = {article: 'dasfdksfjk;ldasjfkl;adsjfkl;j as;ldkfjak;dlsjfkl;dsaj f;lksadj f'}
        updateTranslated(responseData.article);
      }
      , 4000)
    }
    , 1000)

}

  useEffect(() => {
    getText()
  }, [])


    return (
      <div className="App">
        <main>
          <Article text={original} time={"1s"} type={"Original"} />
          <Article text={translated} time={"5s"} type={"Translated"} />
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
