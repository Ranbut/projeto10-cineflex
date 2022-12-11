import styled from "styled-components"

const TextoInput = styled.input`
    margin-left: 24px;
    width: 327px;
    height: 51px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding-left: 18px;
    margin-bottom: 10px;
    &::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }
`
const FormContainer = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    p{
        margin-left: 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        margin-bottom: 5px;
    }
`
const Botao = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    align-self: center;
    margin-top: 57px;
`

export {TextoInput, FormContainer, Botao};