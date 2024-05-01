import styled from "styled-components"
import { motion, useTransform, useSpring, useScroll } from "framer-motion"
import { useRef } from "react"

const StyledBannerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4em;
`

const BannerTitle = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start","end 0.4"],
    });

    const Work_1 = [<span>U</span>,<span>X</span>,<span>/</span>,<span>U</span>, <span>I&nbsp;</span>,<span>d</span>,<span>e</span>, <span>s</span>,<span>i</span>, <span>g</span>,<span>n</span>, <span>e</span>, <span>r&nbsp;</span>,<span>&</span>];

    const Work_2 = [<span>r</span>,<span>e</span>,<span>m</span>,<span>a</span>,<span>r</span>,<span>g</span>,<span>o</span>,<span>r</span>,<span>p</span>,<span>k&nbsp;</span>,<span>c</span>,<span>a</span>,<span>t</span>,<span>s</span>,<span>l</span>,<span>l</span>,<span>u</span>,<span>f</span>];
    return(
        <>
            <StyledBannerTitle as={motion.div} ref={ref} 
            style={{opacity: scrollYProgress}} 
            className="font-RobotoMono text-2xl text-wrap font-black sm:text-4xl md:text-5xl text-white"
            >
                <div className="font-black flex sm:justify-start md:justify-start">
                    {Work_1.map((letter, i) => {return(
                            <motion.span key={i} drag dragSnapToOrigin
                            initial={{translateY: 50, rotateX: 90, rotateY: 90, opacity: 0}} 
                            animate={{translateY: 0, rotateX: 0, rotateY: 0, opacity: 1}}
                            transition={{rotateX: {duration: 2},delay: i * 0.08, type: "spring", damping: 50}} className="cursor-grab">
                                {letter}
                            </motion.span>
                        )
                    })}
                </div>
                <div className="Name flex flex-row-reverse flex-wrap font-black">
                    {Work_2.map((letter, i) => {return(
                            <motion.span key={i} drag dragSnapToOrigin
                            initial={{translateY: 50, rotateX: 90, rotateY: 90, opacity: 0}} 
                            animate={{translateY: 0, rotateX: 0, rotateY: 0, opacity: 1}} 
                            transition={{delay: i * 0.05, type: "spring", damping: 50}}
                            className="cursor-grab">
                                {letter}
                            </motion.span>
                        )
                    })}
                </div>
            </StyledBannerTitle>
        </>
    )
}

export default BannerTitle;