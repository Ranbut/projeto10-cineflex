import { BrowserRouter, Routes, Route } from "react-router-dom";
import {StyledApp, Navtop} from "./styles"
import GlobalStyle from '../globalStyles';
import Filmes from '../Filmes/Filmes';
import Sessoes from '../Sessoes/Sessoes';
import Assentos from '../Assentos/Assentos'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <StyledApp>
        <Navtop>CINEFLEX</Navtop>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/sessoes/:id" element={<Sessoes />} />
          <Route path="/assentos/:id" element={<Assentos />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
    
  );
}

export default App;