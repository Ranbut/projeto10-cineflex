import styled from "styled-components"

const StyledData = styled.div`
    width: 100%;
    height: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
    padding-left: 24px;
`
const BotaoContainer = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-wrap: wrap;
`
const Botao = styled.button`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-left: 8px;
`

export {StyledData, BotaoContainer, Botao}