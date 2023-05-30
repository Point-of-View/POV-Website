import 'react-tooltip/dist/react-tooltip.css'
import './changes.css'
import { Tooltip } from 'react-tooltip'

export default function Changes({reason, index, text, isHovered, setIsHovered, classValue}) {

    const highlightColors = [
        ['#FF9E9E', '#FFB3B3'],
        ['#FFA74D', '#FFc080'],
        ['#FFF74D', '#FFF080'],
        ['#6EF74D', '#6EF080'],
        ['#52F74D', '#52F080'],
        ['#52874D', '#528080'],
        ['#96574D', '#965080'],
        ['#FF574D', '#FF5080'],
    ];
    
    return (                    
        <span>
            <Tooltip anchorSelect={"."+ classValue} place="top" className='box'>{reason}</Tooltip>
            <p className={classValue}
            style={{ backgroundColor: ((isHovered === index) ? highlightColors[index % 7][0] : highlightColors[index % 7][1]), display: 'inline' }}
            onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(-1)}>
            {text}
            </p>
        </span>
    )
}


