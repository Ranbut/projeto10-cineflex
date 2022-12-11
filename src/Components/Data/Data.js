import {StyledData, BotaoContainer, Botao} from "./styles";
import { Link } from "react-router-dom";

function Data({data}) {
    return(
        <>
            <StyledData>{data.weekday} - {data.date}</StyledData>
            <BotaoContainer>
                {data.showtimes.map((h) => <Link key={h.id} to={`/assentos/${h.id}`}><Botao>{h.name}</Botao></Link>)}
            </BotaoContainer>
        </>
    )
}

export default Data;