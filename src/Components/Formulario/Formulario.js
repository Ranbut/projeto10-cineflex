import { useState } from 'react';
import {TextoInput, FormContainer, Botao} from './styles';


export default function Formulario(){
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    function reservarAssento (event) {
		event.preventDefault();
	}
    return(
        <FormContainer onSubmit={reservarAssento}>
            <p>Nome do comprador:</p>
            <TextoInput required type="text" value={nome} placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)} />
            <p>CPF do comprador:</p>
            <TextoInput required type="text" value={cpf} placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} />
            <Botao type="submit">Reservar assento(s)</Botao>
        </FormContainer>
    )
}