import styled from "styled-components"
import img from '../../assets/images/logo-branca-100px 1.png'
import { motion } from "framer-motion"

const StyledHeader = styled.header`
    position: fixed;
    width: 100vw;
    height: 45px;
    display: flex;
    justify-content: center;
    z-index: 3;
    top: 0;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 30px);
    max-width: 1480px;
    height: 100%;
`
    
const Header = () => {
    return(
        <>
            <StyledHeader 
            as={motion.header}
            initial={{
                y: -45
            }}
            animate={{
                y: 0
            }}
            transition={{
                type:"spring",
                damping: 20,
                stiffness: 100,
                delay: 1
            }}
            >
                <HeaderContainer>
                    <div>
                        <img src={img} alt="Logo com a letra V e S e D" />
                    </div>
                </HeaderContainer>
            </StyledHeader>
           
        </>
    )
}

export default Header;