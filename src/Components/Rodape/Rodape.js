import styled from 'styled-components';
export default function Rodape({sessao}) {
    if(sessao.hasOwnProperty('movie')){
        return(
            <ContainerRodape data-test="footer">
                <CardFilme>
                    <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
                </CardFilme>
                <Titulo>{sessao.movie.title}<br/>{sessao.day.weekday} - {sessao.name}</Titulo>
            </ContainerRodape>
        );
    }else{
        return(
            <ContainerRodape data-test="footer">
                <CardFilme>
                    <img src={sessao.posterURL} alt={sessao.title} />
                </CardFilme>
                <Titulo>{sessao.title}</Titulo>
            </ContainerRodape>
        );
    }
}

const ContainerRodape = styled.div`
    position: fixed;
    width: 100%;
    height: 117px;
    left: 0;
    bottom: 0;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    padding-left: 10px;
`;
const Titulo = styled.div`
    width: 280px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
`;
const CardFilme = styled.div`
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    img{
        width: 48px;
        height: 72px;
    }
`;