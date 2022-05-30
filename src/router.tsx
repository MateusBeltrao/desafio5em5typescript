import {Route, Routes} from "react-router-dom"

import FormularioMultiEtapas from "./pages/desafioFormulárioMulti-etapas";
import ListaDeTarefa from "./pages/desafioListaDeTarefas";
import GaleiriaDeFotos from "./pages/desafioGaleiriaDeFotos";
import JogoRPG from "./pages/desafioJogoRPG";
import SistemaDeFinanças from "./pages/desafioSistemaDeFinanças";
import Home from "./pages/Home";

export const MainRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/formulario' element={<FormularioMultiEtapas />}></Route>
            <Route path="/tarefa" element={<ListaDeTarefa></ListaDeTarefa>}></Route>
            <Route path="/galeria" element={<GaleiriaDeFotos></GaleiriaDeFotos>}></Route>
            <Route path="/jogo" element={<JogoRPG></JogoRPG>}></Route>
            <Route path="/financas" element={<SistemaDeFinanças></SistemaDeFinanças>}></Route>
        </Routes>
    )
}