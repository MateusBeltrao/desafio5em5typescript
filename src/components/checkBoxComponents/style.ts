import styled from "styled-components";

interface Props{

}

export const CheckboxInput = styled.input`
    border: solid #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    position: relative;
    margin: 20px 5px 20px 20px;
    padding: 0;
    

    &:bofore{
        position: relative;
        content: '';
        background-color: #000;
        width: 80%;
        height: 80%;
        opacity: 0;
    }

    &:checked{
        opacity: 1;
    }

    &:hover{
        cursor: pointer;
    }
`