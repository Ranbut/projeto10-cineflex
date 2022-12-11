import {StyledAssento} from "./styles";

function Assento({seat, selecionados, setSelecionados}) {
    
    function clicar(){
        if(!seat.isAvailable){
            alert("Esse assento não está disponível!");
        }else{
            if(selecionados.find(e => e === seat)){
                let array = [];
                for(let i = 0; i < selecionados.length; i++){
                    if(selecionados[i] !== seat){
                        array.push(selecionados[i]);
                    }
                }
                setSelecionados([...array]);
            }else{
                setSelecionados([...selecionados, seat]);
            }
        }
    }
    return(
        <StyledAssento data-test="seat" disponivel={seat.isAvailable} selecionado={selecionados.find(e => e === seat)} onClick={clicar}>{seat.name}</StyledAssento>
    )
}

export default Assento;