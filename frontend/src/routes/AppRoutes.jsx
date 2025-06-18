import { Routes, Route } from 'react-router-dom';
import Filmes from "../features/filme/pages/Filmes";
import Home from '../features/home/pages/Home';
import Ingressos from '../features/ingressos/pages/ingresso';
import Salas from '../features/salas/pages/salas';
import Sessoes from '../features/sessoes/pages/sessoes';

export function AppRoutes () {
    return(
        <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path="/Filmes" element={<Filmes />} />
            <Route path="/Ingressos" element={<Ingressos />} />
            <Route path="/Salas" element={<Salas />} />
            <Route path="/Sessoes" element={<Sessoes />} />
        </Routes>
    );
}