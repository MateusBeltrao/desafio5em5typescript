import styled from "styled-components";

interface Props{
    done: boolean
}

export const LabelStyles = styled.label(({done}: Props)=>(
`
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'};
    margin-top: 28px;
`
))