import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Rodape from '../Rodape/Rodape';
import Assento from '../Assento/Assento';
import {AssentosContainer, StyledAssento, DescricaoContainer, StyledTexto} from './styles';
import Formulario from '../Formulario/Formulario';

function Assentos({nome, setNome, cpf, setCpf, selecionados, setSelecionados, assentos, setAssentos}) {

    const params = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.id}/seats`);

        requisicao.then(resposta => {
            setAssentos(resposta.data);
            setSeats(resposta.data.seats);
        });
    }, [params.id]);
    
    return (
        <>
            <StyledTexto>Selecione o(s) assento(s)</StyledTexto>
            <AssentosContainer>{seats.map((a) => <Assento key={a.id} seat={a} selecionados={selecionados} setSelecionados={setSelecionados}/>)}</AssentosContainer>
            <DescricaoContainer>
                <div>
                    <StyledAssento cor="#1AAE9E" borda="#0E7D71"/>
                    <p>Selecionado</p>
                </div>
                <div>
                    <StyledAssento cor="#C3CFD9" borda="#7B8B99"/>
                    <p>Disponível</p>
                </div>
                <div>
                    <StyledAssento cor="#FBE192" borda="#F7C52B"/>
                    <p>Indisponível</p>
                </div>
            </DescricaoContainer>
            <Formulario selecionados={selecionados} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf}/>
            <Rodape sessao={assentos}/>
        </>
    )
}
export default Assentos