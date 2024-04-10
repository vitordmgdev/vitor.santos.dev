import styled from "styled-components"
import img from '../../assets/images/logo-branca-100px 1.png'

const Header = () => {
    const StyledHeader = styled.header`
        width: 100vw;
        height: 45px;
        display: flex;
        justify-content: center;
    `

    const HeaderContainer = styled.div`
        display: flex;
        align-items: center;
        max-width: 1280px;
        width: calc(100% - 30px);
        height: 100%;
    `

    return(
        <>
            <StyledHeader className="bg-gray-800">
                <HeaderContainer>
                    <img src={img} alt="Logo com a letra V e S e D" />
                </HeaderContainer>
            </StyledHeader>
           
        </>
    )
}

export default Header;