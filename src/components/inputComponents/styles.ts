import styled from "styled-components";

interface Props{
    height: string
    backgroundColor: string
    border: string
}

export const InputStyled = styled.input<Props>`
    flex: 1;
    height: ${(props)=> props.height};
    background-color: ${(props)=> props.backgroundColor};
    border: ${(props)=> props.border};
    outline: 0;
    color: #fff;
    font-size: 18px;
`
