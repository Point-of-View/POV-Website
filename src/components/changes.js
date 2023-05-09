import 'react-tooltip/dist/react-tooltip.css'
import './changes.css'
import { Tooltip } from 'react-tooltip'
import { useState, useEffect } from 'react';

export default function Changes({reason, hovered, index, text}) {

    const highlightColors = {
        1: ['#FF4136', '#FF1300'],
        2: ['#FFA500', '#FF7400'],
        3: ['#FFDC00', '#D4AF37'],
        4: ['#2ECC40', '#007E23'],
        5: ['#0074D9', '#004776'],
        6: ['#B10DC9', '#7A007A'],
        7: ['#FF1493', '#C71585'],
        8: ['#39CCCC', '#008B8B'],
        9: ['#AAAAAA', '#696969'],
        10: ['#111111', '#333333'],
      };

    const [isHovered, setIsHovered] = useState(false);
    
    return (                    
        <span>
            <Tooltip anchorSelect={"."+text.split(" ")[0]} place="top" className='box'>{reason}</Tooltip>
            <p className={text.split(" ")[0]}
            style={{ backgroundColor: (hovered ? highlightColors[index + 1][0] : highlightColors[index + 1][1]), display: 'inline' }}
            >
            {text}
            </p>
        </span>
    )
}


