import ProgressBar from "@ramonak/react-progress-bar";
import "./article.css"
import Changes from './changes.js'


export default function Article({text, time, type}) {

    return (
        <div className="article">
            <h2>{type} Text</h2>

            { text ? 
                <p><Changes reason={text}/>{text}</p>
                :
                <div>
                    <p>Loading {type.toLowerCase()} text</p>
                    <ProgressBar completed={95} transitionDuration={time} animateOnRender={true} transitionTimingFunction={"linear"} customLabel=" " />
                </div>
            }

         </div>
                
    )
        


}