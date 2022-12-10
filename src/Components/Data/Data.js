import {StyledData, BotaoContainer, Botao} from "./style"

function Data({data}) {
    return(
        <>
            <StyledData>{data.weekday} - {data.date}</StyledData>
            <BotaoContainer>
                {data.showtimes.map((h) => <Botao key={h.id}>{h.name}</Botao>)}
            </BotaoContainer>
        </>
    )
}

export default Data