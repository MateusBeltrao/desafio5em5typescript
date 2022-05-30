import styled from 'styled-components'

interface Props{
    backgroundColor: string
    width: string
    height: string
    margin: string
    minHeight: string
    padding: string
    maxWidth: string
    flexDirection: string
    alignItem: string
    alignContent: string
    justufyContent: string
    flexWrap: string
    display: string
    borderRadius: string
    border: string
}

export const DivStyled = styled.div<Props>`
    background-color: ${(props) => props.backgroundColor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: ${(props)=> props.display};
    flex-direction: ${(props)=> props.flexDirection};
    flex-wrap: ${(props)=> props.flexWrap};
    align-content: ${(props)=> props.alignContent};
    align-items: ${(props)=> props.alignItem};
    justify-content: ${(props)=> props.justufyContent};
    margin: ${(props) => props.margin};
    min-height: ${(props)=> props.minHeight};
    padding: ${(props)=> props.padding};
    max-width: ${(props)=> props.maxWidth};
    border-radius: ${(props) => props. borderRadius} ;
    border: ${(props)=> props.border};
`
