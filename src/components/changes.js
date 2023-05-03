import 'react-tooltip/dist/react-tooltip.css'
import './changes.css'
import { Tooltip } from 'react-tooltip'

export default function Changes({reason, index, text}) {
    
    return (                    
        <span>
            <Tooltip anchorSelect={"."+text.split(" ")[0]} place="top">{reason}</Tooltip>
            <p style={{backgroundColor: index === 0 ? 'blue' : 'red', display: 'inline'}} className={text.split(" ")[0]}>{text}</p>
        </span>
    )
}


