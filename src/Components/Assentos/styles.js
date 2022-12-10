import styled from "styled-components";

const AssentosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 24px;
`
const StyledAssento = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.cor};
    border: 1px solid;
    border-color: ${props => props.borda};
    border-radius: 17px;
    margin-bottom: 5px;
`
const DescricaoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 40px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`

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

export {AssentosContainer, StyledAssento, DescricaoContainer, StyledTexto};