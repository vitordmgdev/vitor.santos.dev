import styled from "styled-components"
import { DiJavascript } from "react-icons/di"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"





const StyledCube = styled.div`
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateY(45deg);
    div{
        position: absolute;
        width: 120px;
        aspect-ratio: 1 / 1;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .cube-front{
        background-color: blue;
    }
    .cube-left{
        background-color: yellow;
        transform: translate3d(-100%, 0, 0) rotateY(90deg);
        transform-origin: 100%;
    }
    .cube-right{
        background-color: violet;
        transform: translate3d(100%, 0, 0) rotateY(-90deg);
        transform-origin: left;
    }
    .cube-top{
        background-color: aqua;
        transform: translate3d(0,-100%, 0) rotateX(-90deg);
        transform-origin: bottom;
    }
    .cube-bottom{
        background-color: limegreen;
        transform: translate3d(0, 100%, 0) rotateX(90deg);
        transform-origin: top;
    }
    .cube-back{
        background-color: red;
        transform: translate3d(0, 0, 100%) rotateY(180deg);
    }
    
`

const Cube = () => {
    const RefCube = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: RefCube,
        offset: ["end start","end center"]
    })
    const rotateTransform = useTransform(scrollYProgress, [0,1],[30, 90]);

    return(
        <>
            <StyledCube ref={RefCube}>
                <div className="cube-front">
                    <DiJavascript />
                </div>
                <div className="cube-left">
                    <DiJavascript />
                </div>
                <div className="cube-right">
                    <DiJavascript />
                </div>
                <div className="cube-top">
                    <DiJavascript />
                </div>
                <div className="cube-bottom">
                    <DiJavascript />
                </div>
                <div className="cube-back">
                    <DiJavascript />
                </div>
            </StyledCube>
        </>
    )
}

export default Cube;