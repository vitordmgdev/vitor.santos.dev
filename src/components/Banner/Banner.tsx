import styled from "styled-components"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
    const StyledBanner = styled.div`
        position: relative;
        width: calc(100vw - 30px);
        max-width: 1280px;
        height: calc(100vh - 95px);
        max-height: 520px;
        display: flex;
        align-items: center;
    `
    const BannerTitle = () => {
        const StyledBannerTitle = styled.div`
            width: 100%;
            .Apresentation{
                width: fit-content;
                transform-style: preserve-3d;
                transform: rotateX();
            }
        `

        const StyledSocialMediaContainer = styled.div`
            display: flex;
            position: absolute;
            top: 30px;
            left: 0;
            gap: 10px;
            border-radius: 5px;
        `

        interface LinkSocialMedia{
            link?: string,
            child?: any
        }

        const LinkSocialMedia = ({link, child}:LinkSocialMedia) => {
            return(
                <a href={link} target="_blank">
                    {child}
                </a>
            )
        }

        
        return(
            <>
                <StyledSocialMediaContainer className="bg-gray-800 text-1xl text-primary p-2 sm:text-2xl md:text-1xl">
                    <LinkSocialMedia link={""} child={<FaGithub />}/>
                    <LinkSocialMedia link={""} child={<FaLinkedin />}/>
                    <LinkSocialMedia link={""} child={<FaInstagram />}/>
                </StyledSocialMediaContainer>
                <StyledBannerTitle className="font-RobotoMono text-6xl text-wrap font-black sm:text-7xl md:text-8xl text-primary">
                    <div className="Apresentation font-black flex sm:justify-start md:justify-start">
                        <span>Oi! eu sou</span>
                    </div>
                    <div className="Name flex flex-wrap font-black">
                        <span>Vitor&nbsp;</span>
                        <span>Santos</span>
                    </div>
                </StyledBannerTitle>
            </>
        )
    }
    

    return(
        
        <StyledBanner>
            <BannerTitle />
        </StyledBanner>
    )
}

export default Banner;