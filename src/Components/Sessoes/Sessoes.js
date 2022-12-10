import { useParams } from 'react-router-dom';
import { StyledTexto } from "./style"
function Sessoes() {
    const params = useParams();
	console.log(params); 
    return(
        <>
            <StyledTexto>Selecione o horário</StyledTexto>
        </>
    )
}

export default Sessoes;