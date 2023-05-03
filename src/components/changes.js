import { useState, useEffect, useRef } from 'react';
import './changes.css'

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
  

export default function Changes({reason, ref_num, text}) {
    const [isHovered, setIsHovered] = useState(false);
    const boxRef = useRef(null);
    const highlightRef = useRef(null);

    useEffect(() => {
        highlightRef.current.style.backgroundColor = highlightColors[ref_num][0];
    }, []);

    useEffect(() => {
        if (isHovered) {
        boxRef.current.style.display = 'block';
        boxRef.current.style.top = boxRef.current.clientHeight * -1.25 +`px`;
        highlightRef.current.style.backgroundColor = highlightColors[ref_num][0];
        } else {
        boxRef.current.style.display = 'none';
        highlightRef.current.style.backgroundColor = highlightColors[ref_num][1];
        }
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <span className={`highlight`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        ref={highlightRef}>
            <span className="box sb3" ref={boxRef}>Reason for change: {reason}</span>
            {text}
        </span>
    )
}


