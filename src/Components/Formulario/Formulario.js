import {TextoInput, FormContainer, Botao} from "./styles";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Formulario({selecionados, nome, setNome, cpf, setCpf}){
    const navigate = useNavigate();
    
    function reservar (event) {
		event.preventDefault();
        const ids = selecionados.map((s) => s.id)
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
			ids: ids,
            name: nome,
			cpf: cpf
		});
        requisicao.then(() => navigate("/sucesso"));
	}
    return(
        <FormContainer onSubmit={reservar}>
            <p>Nome do comprador:</p>
            <TextoInput required type="text" value={nome} placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)} data-test="client-name"/>
            <p>CPF do comprador:</p>
            <TextoInput required type="text" value={cpf} placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} data-test="client-cpf"/>
            <Botao type="submit" data-test="book-seat-btn">Reservar assento(s)</Botao>
        </FormContainer>
    )
}


export default Formulario;