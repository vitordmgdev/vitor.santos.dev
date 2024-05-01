import styled from "styled-components"

const StyledSkills = styled.div`
    width: calc(100vw - 30px);
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
`

const StyledSkillCard = styled.div`
    flex: 1 1 320px;
    aspect-ratio: 8 / 4;
    max-height: 400px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: calc(100% - 30px);
    height: calc(100% - 15px);
`

const skillsArray = [
    {
        skillName: "Back-end"
    },
    {
        skillName: "Front-end"
    },
    {
        skillName: "UX/UI design"
    }
]

const SkillCard = ({skillName}:any) => {
    return(
        <StyledSkillCard className="bg-slate-800">
            <Container>
                <h1 className="font-RobotoMono text-xl text-white">{skillName}</h1>
            </Container>
        </StyledSkillCard>
    )
}

const Skills = () => {
    return(
        <StyledSkills>
            {
                skillsArray.map((element, index) => {
                    return(
                        <SkillCard key={index} skillName={element.skillName}/>
                    )
                })
            }
        </StyledSkills>
    )   
}

export default Skills;