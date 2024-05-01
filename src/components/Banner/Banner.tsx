import styled from "styled-components"
import BannerTitle from "./BannerTitle";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";

const StyledBanner = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 125px);
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 45px;
    overflow: hidden;
    border-radius: 10px;
    backdrop-filter: blur(75px);
`

const SocialArray = [
    { icon: <FaXTwitter size={22} />,link: "" },
    { icon: <FaInstagram size={22} />,link: "" },
    { icon: <FaLinkedin size={22} />,link: "" },
    { icon: <FaBehance size={22} />,link: "" }
]

const StyledSocial = styled.div`
    display: flex;
    gap: 15px;
    align-self: center;
    svg{
        transition: .3s;
    }
`
const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
`


const Banner = () => {
    const RefSocial = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: RefSocial,
        offset: ["end 0.1","end 0.49"]
    });
    return(
        <>
            <StyledBanner>
                <motion.div 
                className="w-[300px] h-[300px] bg-slate-700 absolute rounded-full blur-[130px] left-0 top-0 translate-y-[-50%]"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5, duration: 2}}
                >
                
                </motion.div>
                <motion.div 
                className="w-[400px] h-[400px] bg-slate-700 absolute rounded-full blur-[130px] right-0 bottom-0 translate-y-[50%]"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5, duration: 2}}
                >

                </motion.div>
                <BannerContainer className="absolute">
                    <BannerTitle />
                    <StyledSocial 
                    as={motion.div} 
                    className="text-slate-200"
                    ref={RefSocial}
                    style={{
                        opacity: scrollYProgress
                    }}
                    >
                        {
                            SocialArray.map((element, index) => {
                                return(
                                    <motion.a 
                                    key={index} 
                                    href={element.link} 
                                    target="_blank"
                                    className="hover:text-slate-400"
                                    initial={{translateY: 40,opacity: 0,}}
                                    animate={{translateY: 0,opacity: 1}}
                                    transition={{
                                        delay: index * 0.25,type: "spring",
                                        stiffness: 100,damping: 50
                                    }}>
                                        {element.icon}
                                    </motion.a>
                                )
                            })
                        }
                    </StyledSocial>
                </BannerContainer>
                    
            </StyledBanner>
        </>   
    )
}

export default Banner;