import {StyledApp, Navtop, StyledTexto, FilmeContainer, Filme} from './style';
import GlobalStyle from '../globalStyles';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [filmes, setFilmes] = useState([])
  useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
		requisicao.then(resposta => {
			setFilmes(resposta.data);
		});
	}, []);
  return (
    <>
      <GlobalStyle/>
      <StyledApp>
        <Navtop>CINEFLEX</Navtop>
        <StyledTexto>Selecione o filme</StyledTexto>
        <FilmeContainer>
          {filmes.map((f)=> <Filme key={f.id}><img src={f.posterURL} alt={f.title}/></Filme>)}
        </FilmeContainer>
      </StyledApp>
    </>
  );
}
