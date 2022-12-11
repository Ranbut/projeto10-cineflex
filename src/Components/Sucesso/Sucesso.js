import {Container, Titulo, Dados, TextoSucesso, Botao} from './styles'
import { Link } from "react-router-dom";

function Sucesso({nome, cpf, selecionados, assentos, setNome, setCpf, setSelecionados}){
    return (
        <Container>
            <TextoSucesso>Pedido feito <br/> com sucesso!</TextoSucesso>
            <div data-test="movie-info">
                <Titulo>Filme e sessão</Titulo>
                <Dados>{assentos.movie.title}<br/>{assentos.day.date} {assentos.name}</Dados>
            </div>
            <div data-test="seats-info">
                <Titulo>Ingressos</Titulo>
                <Dados>{selecionados.map((s) => <p key={s.id}>Assento {s.name}</p>)}</Dados>
            </div>
            <div data-test="client-info">
                <Titulo>Comprador</Titulo>
                <Dados>Nome: {nome} <br/> CPF: {cpf}</Dados>
            </div>
            <Link to="/" data-test="go-home-btn"><Botao onClick={() => {setNome("");setCpf("");setSelecionados([...[]]);}}>Voltar pra Home</Botao></Link>
        </Container>
    )
}

export default Sucesso;