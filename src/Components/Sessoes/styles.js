import styled from "styled-components";

const StyledTexto = styled.div`
width: 100%;
height: 100px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
color: #293845;
`

const Navbottom = styled.div`
    position: fixed;
    width: 100%;
    height: 117px;
    left: 0;
    bottom: 0;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    padding-left: 10px;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        margin-left: 14px;
    }
`
const FilmeCard = styled.div`
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 48px;
        height: 72px;
    }
`
const DataContainer = styled.div`
    margin-bottom: 130px;
`

export {StyledTexto, DataContainer, FilmeCard, Navbottom};