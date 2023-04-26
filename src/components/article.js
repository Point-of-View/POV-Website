import ProgressBar from "@ramonak/react-progress-bar";
import "./article.css"


export default function Article({text, time, type}) {

    return (
        <div className="article">
            <h2>{type} Text</h2>

            { text ? 
                <p>{text}</p>
                :
                <div>
                    <p>Loading {type.toLowerCase()} text</p>
                    <ProgressBar completed={95} transitionDuration={time} animateOnRender={true} transitionTimingFunction={"linear"} customLabel=" " />
                </div>
            }

         </div>
                
    )
        


}