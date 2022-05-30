import styled from "styled-components";

interface Props {
    width: string
    height: string
    background: string
    padding: string
}

export const HeaderStyles = styled.div<Props>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background};
    padding: ${props => props.padding};
`