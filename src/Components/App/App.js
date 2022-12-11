import { BrowserRouter, Routes, Route } from "react-router-dom";
import {StyledApp, Navtop} from "./styles";
import GlobalStyle from '../globalStyles';
import Filmes from '../Filmes/Filmes';
import Sessoes from '../Sessoes/Sessoes';
import Assentos from '../Assentos/Assentos'
import Sucesso from '../Sucesso/Sucesso'
import { useState } from 'react';

function App() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [selecionados, setSelecionados] = useState([]);
  const [assentos, setAssentos] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <StyledApp>
        <Navtop>CINEFLEX</Navtop>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/sessoes/:id" element={<Sessoes />} />
          <Route path="/assentos/:id" element={<Assentos nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} selecionados={selecionados} setSelecionados={setSelecionados} assentos={assentos} setAssentos={setAssentos}/>} />
          <Route path="/sucesso" element={<Sucesso nome={nome} cpf={cpf} selecionados={selecionados} assentos={assentos} setNome={setNome} setCpf={setCpf} setSelecionados={setSelecionados}/>} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;