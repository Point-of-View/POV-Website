import ProgressBar from "@ramonak/react-progress-bar";
import "./article.css";
import Changes from './changes.js';

export default function Article({text, title, time, type, changes, isHovered, setIsHovered}) {

    return (
        <div className={type === "Original" ? "original" : "translated"}>
            <h2>{type} Text</h2>

            <h3>{title && title.trim()}</h3>

            <div className="article">


            { text ? 
                <ArticleText text={text} changes={changes} type={type} isHovered={isHovered} setIsHovered={setIsHovered}/>
                :
                <div>
                    <p>Loading {type.toLowerCase()} text</p>
                    <ProgressBar completed={95} transitionDuration={time} animateOnRender={true} transitionTimingFunction={"linear"} customLabel=" " />
                </div>
            }

            </div>
         </div>
                
    )
        
}


const ArticleText = ({text, changes, type, isHovered, setIsHovered}) => {

    let changedText = text
    let splitText = [text]
    let pos = type === "Original" ? 0 : 1

    if (changes) {
        for (let i=0; i < changes.length; i++) {
            changes[i][pos] = changes[i][pos].replaceAll('"', "")
            changedText = changedText.replace(changes[i][pos], "<!><!!><" + i + ">" + changes[i][pos] + "<!>")
            // changedText = changedText.replace(changes[i][pos].charAt(0).toUpperCase() + changes[i][pos].slice(1), "<!><!!><" + i + ">" + changes[i][pos].charAt(0).toUpperCase() + changes[i][pos].slice(1) + "<!>")
        }
        splitText = changedText.split('<!>')
    }


    return (

            <div>{splitText.map((x, i) => {
                if (x.slice(0, 4) === "<!!>") {
                    let stop = getStop(x)
                    return <Changes key={type + x.slice(5,stop)} classValue={type + x.slice(5,stop)} index={parseInt(x.slice(5,stop))} reason={changes[parseInt(x.slice(5,stop))][2]} text={x.slice(stop+1)} isHovered={isHovered} setIsHovered={setIsHovered}/>
                } else {
                    return <p key={i} style={{display: 'inline'}}>{x}</p>
                }
            })}</div>
    )
}

const getStop = (x) => {
    if (x[6] === '>') {
        return 6
    } else {
        return 7
    }
}
