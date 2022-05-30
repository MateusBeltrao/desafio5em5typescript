import styled from 'styled-components'

interface Props{
    size: string
    color: string
    padding: string 
    borderBottom: string
    font: string
    margin: string
    textAlign: string
}

export const PStyled = styled.p<Props>`
    size: ${(props) => props.size};
    text-align: ${(props) => props.textAlign};
    margin: ${(props)=> props.margin};
    font-family: ${(props) => props.font};
    color: ${(props) =>props.color};
    padding: ${(props) => props.padding};
    border-bottom: ${(props) => props.borderBottom};
    
    
`