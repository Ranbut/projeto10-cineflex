import { useParams } from 'react-router-dom';
import { StyledTexto, DataContainer, FilmeCard, Navbottom} from "./styles"
import Data from '../Data/Data';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Sessoes() {
    const params = useParams();

    const [sessoes, setSessoes] = useState([]);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.id}/showtimes`);
        requisicao.then(resposta => {
            setSessoes(resposta.data);
            setData(resposta.data.days);
        });
    }, [params.id]);

    return(
        <>
            <StyledTexto>Selecione o horário</StyledTexto>
            <DataContainer>
                {data.map((d) => <Data key={d.id} data={d}/>)}
            </DataContainer>
            <Navbottom>
                <FilmeCard>
                    <img src={sessoes.posterURL} alt={sessoes.title} />
                </FilmeCard>
                <p>{sessoes.title}</p>
            </Navbottom>
        </>
    )
}

export default Sessoes;