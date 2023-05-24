import 'react-tooltip/dist/react-tooltip.css'
import './changes.css'
import { Tooltip } from 'react-tooltip'

export default function Changes({reason, hovered, index, text}) {

    const highlightColors = {
        1: ['#FF9E9E', '#FFB3B3'],
        2: ['#FFA74D', '#FFc080'],
        3: ['#FFF74D', '#FFF080'],
        4: ['#6EF74D', '#6EF080'],
        5: ['#52F74D', '#52F080'],
        6: ['#52874D', '#528080'],
        7: ['#96574D', '#965080'],
        8: ['#FF574D', '#FF5080'],
        9: ['#FF9E9E', '#FFB3B3'],
        10: ['#FFA74D', '#FFc080'],
        11: ['#FFF74D', '#FFF080'],
        12: ['#6EF74D', '#6EF080'],
        13: ['#52F74D', '#52F080'],
        14: ['#52874D', '#528080'],
        15: ['#96574D', '#965080']
      };
    
    return (                    
        <span>
            <Tooltip anchorSelect={"."+text.split(" ")[0]} place="top" className='box'>{reason}</Tooltip>
            <p className={text.split(" ")[0]}
            style={{ backgroundColor: (hovered ? highlightColors[index][0] : highlightColors[index][1]), display: 'inline' }}
            onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(-1)}>
            {text}
            </p>
        </span>
    )
}


