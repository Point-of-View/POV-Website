import { useState, useEffect, useRef } from 'react';
import './changes.css'

export default function Changes({reason, color}) {
    const [isHovered, setIsHovered] = useState(false);
    const boxRef = useRef(null);

    useEffect(() => {
        if (isHovered) {
          boxRef.current.style.display = 'block';
          boxRef.current.style.top = boxRef.current.clientHeight * -1.2 +`px`;
        } else {
            boxRef.current.style.display = 'none';
        }
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <span className="highlight" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className="box sb3" ref={boxRef}>Reason for change:
             Reason for change: Reason for change: {reason}</span>
            “Let’s be frank, anyone who associated with a gang at some
             point in their life, they’ve done something, whether they
              have been arrested or not,” he said.
        </span>
    )
}


