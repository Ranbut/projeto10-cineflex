import {StyledData, BotaoContainer, Botao} from "./styles";
import { Link } from "react-router-dom";

function Data({data}) {
    return(
        <div data-test="movie-day">
            <StyledData>{data.weekday} - {data.date}</StyledData>
            <BotaoContainer>
                {data.showtimes.map((h) => <Link key={h.id} to={`/assentos/${h.id}`}><Botao data-test="showtime">{h.name}</Botao></Link>)}
            </BotaoContainer>
        </div>
    );
}

export default Data;