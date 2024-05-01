import styled from "styled-components"

interface ProjectsProps{
    projectName?: string,
    category: "Back-end" | "Front-end" | "FullStack" | string,
}

const ProjectsArray = [
    {
        projectName: "To-do list",
        category: "Back-end"
    },
    {
        projectName: "Typing-stack",
        category: "Back-end"
    }
]

const StyledProjects = styled.section`
    width: calc(100vw - 30px);
    border-radius: 10px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    border: 1px solid #475569;
`

const Projects = () => {
    return(
        <StyledProjects className="bg-slate-800">
          
        </StyledProjects>
    )
}

export default Projects;