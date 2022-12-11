import styled from "styled-components";

const FilmesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const FilmeCard = styled.div`
  width: 145px;
  height: 209px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 129px;
    height: 193px;
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

export {FilmesContainer, FilmeCard, StyledTexto};