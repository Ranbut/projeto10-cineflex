import {StyledTexto , FilmesContainer, FilmeCard} from "./styles";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
function Filmes() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
          const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
          requisicao.then(resposta => {
              setFilmes(resposta.data);
          });
      }, []);
    return (
        <>
            <StyledTexto>Selecione o filme</StyledTexto>
            <FilmesContainer>
                {filmes.map((f) => <Link data-test="movie" to={`/sessoes/${f.id}`} key={f.id}><FilmeCard><img src={f.posterURL} alt={f.title}/></FilmeCard></Link>)}
            </FilmesContainer>
        </>
    )
}

export default Filmes;