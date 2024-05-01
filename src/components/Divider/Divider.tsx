import styled from "styled-components";

const Divider = styled.div`
    position: relative;
    width: calc(100vw - 30px);
    max-width: 1180px;
    height: 60px;
    &::after{
        position: absolute;
        content: "";
        background-color: #2f415f;
        width: 100%;
        height: 1px;
        top: 50%;
        left: 0;
    }
`

export default Divider;