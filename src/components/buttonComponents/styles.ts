import styled from "styled-components";

interface Props{
    backgroundColor: string
    width: string
    height: string
}

export const ButtonStyled = styled.div<Props>`
    background-color: ${(props) => props.backgroundColor};
    width: ${(props)=> props.width};
    height: ${(props)=> props.height};
    border-radius: 25px;
    cursor: pointer;
`