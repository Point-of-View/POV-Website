import { useState, useEffect } from 'react';
import './App.css';
import Article from './components/article';


const DUMMY_DATA = true

function getDummyData(updateOriginal, updateTranslated) {
  setTimeout(() =>{
    let responseData = {text: 'Vice President Kamala Harris will make the case for President Joe Biden\u2019s reelection bid Tuesday at a political rally on reproductive freedom, a Harris adviser told CNN, saying that \u201cfinishing the job\u201d for 2024 is about fighting to protect abortion access among other rights facing nationwide restrictions.\n\nHarris will \u201chighlight the extremism of elected Republicans and the unrelenting attacks on women and healthcare providers state by state,\u201d the adviser said.\n\nThe vice president will speak at a major rally on the same day Biden announced his reelection bid, drawing an immediate contrast with Biden who is likely to shun more campaign-style events in the coming months. Earlier, a Biden adviser previously told CNN, \u201cHe\u2019s just gonna keep doing his schedule.\u201d\n\nThe reproductive freedom rally at the vice president\u2019s alma mater Howard University will be a high-profile moment for Harris, crystallizing her role as the administration\u2019s lead messenger in its efforts to safeguard access to abortion on a day where all eyes are on the White House following Biden\u2019s announcement. Abortion rights protests were featured prominently in Biden\u2019s long-awaited reelection campaign announcement video, in which he made the implicit case that he needed another term to restore the nation\u2019s character.\n\nBut Biden and Harris face significant political headwinds in their bid for a second term, including low approval numbers and an unenthusiastic American electorate. A majority of voters, recent polling shows, does not want Biden to seek a second term, citing age as a major factor.\n\nStill, the president\u2019s said in his Tuesday video \u201cthe question we are facing is whether in the years ahead we have more freedom or less freedom. More rights or fewer,\u201d a clear indication that issues like abortion will loom large in his argument for American voters to vote against \u201cMAGA extremists,\u201d and secure him a second term. Abortion rights were a motivating issue for Democrats during the 2022 midterm election and Biden officials hope to utilize the same energy in 2024.\n\n\u201cIt\u2019s a winning issue for them,\u201d a source close to the vice president\u2019s office told CNN.\n\nHarris was also featured heavily in Biden\u2019s announcement video, appearing 13 times over the course of the three-minute spot. The centrality of the vice president in the video\u2019s imagery appeared to serve multiple purposes: to emphasize a younger generation of Democrats in Biden\u2019s world, even as he enters his 80s; to underscore the importance of Black support; and to bolster Harris herself, who has been dogged by questions about her political operation, acumen and whether she should remain on the 2024 ticket over the course of her vice presidency.\n\nHarris\u2019 remarks will track closely with Biden\u2019s campaign video message. Harris is expected to \u201cdescribe the moment we\u2019re in,\u201d according to the adviser, in which reproductive rights are \u201cunder attack.\u201d Harris will call out \u201cextremist\u201d Republicans who seek to make abortion bans federal law. She\u2019ll also discuss book bans, voting rights and gun safety, the adviser said.\n\nThis will be the vice president\u2019s second appearance at a rally on abortion in the last two weeks. In Los Angeles earlier this month, Harris made a surprise stop at a reproductive rights, calling on demonstrators to fight for access to abortion and \u201cfundamental rights\u201d after the Texas ruling on the abortion pill mifepristone.\n\n\u201cWhen you attack the rights of women in America, you are attacking America,\u201d Harris said at a rally in front of LA City Hall on April 15.\n\nHarris\u2019 Tuesday remarks also come less than a week after the Supreme Court issued a brief protecting access to medication abortion and blocking a court ruling that revoked FDA approval of the drug mifepristone while an appeal works its way through lower courts.\n\nThe vice president is set to join leaders from Planned Parenthood, NARAL Pro-Choice America, the ACLU and Emily\u2019s List at a Tuesday rally at 6 p.m. ET.\n\nHarris\u2019 advisers say she, like Biden, will mostly maintain her regular schedule in the coming months, leveraging the power of the vice presidency and bully pulpit during her official White House events and travel outside of Washington that in recent months has focused on abortion rights, climate and upholding democracy broadly in effort to tout the administration\u2019s agenda and draw contrast with the right.\n\nBefore the rally, Harris will host South Korea President Yoon for a visit to the NASA Space Flight Center and tour Goddard facilities, receive briefings from scientists on cooperative efforts regarding space exploration and addressing the climate crisis, and discuss both the present and the future of the countries\u2019 partnership in space. They will also meet with Korean-American space experts, according to a White House official.'}
    updateOriginal(responseData.text);

    setTimeout(() =>{
      let responseData = {ARTICLE: "Vice President Kamala Harris will use her appearance at a political rally at her alma mater Howard University to push for the extreme agenda of abortion on demand, a Harris adviser told CNN. Harris will “highlight the extremism of elected Republicans and the unrelenting attacks on women and healthcare providers state by state,” the adviser said.\n\nThe rally will be a high-profile moment for Harris, crystallizing her role as the administration’s lead messenger in its efforts to expand access to abortion on a day where all eyes are on the White House following Biden’s announcement.\n\nBiden and Harris face significant political headwinds in their bid for a second term, including low approval numbers and an unenthusiastic American electorate. A majority of voters, recent polling shows, does not want Biden to seek a second term, citing age as a major factor. \n\nStill, the president’s said in his Tuesday video “the question we are facing is whether in the years ahead we have more freedom or less freedom. More rights or fewer,” a clear indication that issues like abortion will loom large in his argument for American voters to vote against “MAGA extremists,” and secure him a second term.\n\nHarris was also featured heavily in Biden’s announcement video, appearing 13 times over the course of the three-minute spot. The centrality of the vice president in the video’s imagery appeared to serve multiple purposes: to emphasize a younger generation of Democrats in Biden’s world, even as he enters his 80s; to underscore the importance of Black support; and to bolster Harris herself, who has been dogged by questions about her political operation, acumen and whether she should remain on the 2024 ticket over the course of her vice presidency. \n\nHarris’ remarks will track closely with Biden’s campaign video message. Harris is expected to “describe the moment we’re in,” according to the adviser, in which “radical” Democrats are pushing for unrestricted access to abortion. Harris will call out “leftist” Democrats who seek to make abortion available without any restrictions. She’ll also discuss book bans, voting rights and gun safety, the adviser said. \n\nHarris’ Tuesday remarks also come less than a week after the Supreme Court issued a brief protecting access to medication abortion and blocking a court ruling that revoked FDA approval of the drug mifepristone while an appeal works its way through lower courts.  \n\nThe vice president is set to join leaders from Planned Parenthood, NARAL Pro-Choice America, the ACLU and Emily’s List at a Tuesday rally at 6 p.m. ET. \n\n",
                          CHANGES: [["Biden’s long-awaited reelection campaign announcement video", 'Biden’s announcement video', "To reduce the emphasis on Biden's campaign"], ["abortion rights were a motivating issue for Democrats during the 2022 midterm election and Biden officials hope to utilize the same energy in 2024", 'abortion will loom large in his argument for American voters to vote against “MAGA extremists,” and secure him a second term', "To focus on the role of abortion in Biden's reelection campaign"], ['Harris is expected to “describe the moment we’re in,” according to the adviser, in which reproductive rights are “under attack.”', 'Harris is expected to “describe the moment we’re in,” according to the adviser, in which “radical” Democrats are pushing for unrestricted access to abortion.', 'To emphasize the radicalism of the Democratic Party'], ['Harris will call out “extremist” Republicans who seek to make abortion bans federal law.', 'Harris will call out “leftist” Democrats who seek to make abortion available without any restrictions.', 'To emphasize the radicalism of the Democratic Party']]}
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
    let bias = params.get("bias");

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

  const [isHovered, setIsHovered] = useState([false, false]);

  function handleSetIsHovered(index, value) {
    setIsHovered(prevIsHovered => {
      const newIsHovered = [...prevIsHovered];
      newIsHovered[index] = value;
      return newIsHovered;
    });
  }

    return (
      <div className="App">
        <main>
          <Article text={original} changes={translated.CHANGES} time={"1s"} type={"Original"} isHovered={isHovered} setIsHovered={handleSetIsHovered}/>
          <Article text={translated.ARTICLE?.replaceAll("\\n", '\n')} changes={translated.CHANGES} time={"60s"} type={"Translated"} isHovered={isHovered} setIsHovered={handleSetIsHovered}/>
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
