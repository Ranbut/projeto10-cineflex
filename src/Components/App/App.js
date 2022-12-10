import { BrowserRouter, Routes, Route } from "react-router-dom";
import {StyledApp, Navtop} from "./style"
import GlobalStyle from '../globalStyles';
import Filmes from '../Filmes/Filmes';
import Sessoes from '../Sessoes/Sessoes';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <StyledApp>
        <Navtop>CINEFLEX</Navtop>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/sessoes/:id" element={<Sessoes />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
    
  );
}

export default App;