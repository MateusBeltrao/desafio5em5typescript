import styled from "styled-components";

interface Props{
    size: string
    margin: string
    padding: string
    color: string
    textAlign: string
    paddingBottom: string
    borderBottom: string
    width: string
    font: string
}

export const HStyles = styled.h1<Props>`
    size: ${(props) => props.size};
    font-family: Snell Roundhand, cursive;
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    text-align: ${(props) => props.textAlign};
    padding-bottom: ${(props )=> props.paddingBottom};
    border-bottom: ${(props) => props.borderBottom};
    width: ${(props) => props.width};
    font-family: ${(props) => props.font};
`

