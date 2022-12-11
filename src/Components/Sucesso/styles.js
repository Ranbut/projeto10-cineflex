import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    padding-left: 29px;
    padding-bottom: 10px;
    align-self: start;
`
const Dados = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
    padding-left: 29px;
    padding-bottom: 50px;
    align-self: start;
`
const TextoSucesso = styled.div`
    width: 100%;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
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
    margin-top: 50px;
`


export {Container, Titulo, Dados, TextoSucesso, Botao};