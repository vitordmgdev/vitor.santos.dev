import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header"
import Divider from "../components/Divider/Divider";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const FakeSpacing = styled.div`
    width: 100%;
    height: 100vh;
`

const Home = () =>{
   
    return(
        <>
            <Header />
            <Banner />
            <Skills />
            <Projects />
            {/* <Projects /> */}
            <FakeSpacing>

            </FakeSpacing>
        </>
    )
}

export default Home;