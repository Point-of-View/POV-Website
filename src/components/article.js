import ProgressBar from "@ramonak/react-progress-bar";
import "./article.css";
import Changes from './changes.js';

export default function Article({text, time, type, changes, isHovered, setIsHovered}) {

    return (
        <div className="article">
            <h2>{type} Text</h2>

            { text ? 
                // <p><Changes reason={text}/>{text}</p>
                <ArticleText text={text} changes={changes} type={type} isHovered={isHovered} setIsHovered={setIsHovered}/>
                :
                <div>
                    <p>Loading {type.toLowerCase()} text</p>
                    <ProgressBar completed={95} transitionDuration={time} animateOnRender={true} transitionTimingFunction={"linear"} customLabel=" " />
                </div>
            }

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
            console.log(changes[i][pos])
            changedText = changedText.replace(changes[i][pos], "<!><!!><" + i + ">" + changes[i][pos] + "<!>")
        }
        splitText = changedText.split('<!>')
        console.log(splitText)
    }


    return (

            <div>{splitText.map((x) => {
                if (x.slice(0, 4) === "<!!>") {
                    return <span onMouseEnter={() => setIsHovered(parseInt(x.slice(5)), true)} onMouseLeave={() => setIsHovered(parseInt(x.slice(5)), false)}>
                    <Changes key={x} hovered={isHovered[parseInt(x.slice(5))]} index={parseInt(x.slice(5))} reason={changes[parseInt(x.slice(5))][2]} text={x.slice(7)} />
                    </span>
                } else {
                    return <p key={x} style={{display: 'inline'}}>{x}</p>
                }
            })}</div>
    )
}