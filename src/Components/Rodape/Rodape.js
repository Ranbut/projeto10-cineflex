import {StyledNavbottom, Titulo, FilmeCard} from './styles';

function Rodape({sessao}) {
    if(sessao.hasOwnProperty('movie')){
        return(
            <StyledNavbottom>
                <FilmeCard>
                    <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
                </FilmeCard>
                <Titulo>{sessao.movie.title}<br/>{sessao.day.weekday} - {sessao.name}</Titulo>
            </StyledNavbottom>
        )
    }else{
        return(
            <StyledNavbottom data-test="footer">
                <FilmeCard>
                    <img src={sessao.posterURL} alt={sessao.title} />
                </FilmeCard>
                <Titulo>{sessao.title}</Titulo>
            </StyledNavbottom>
        )
    }
}

export default Rodape;