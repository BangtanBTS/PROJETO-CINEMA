import Card from "../../../components/cards/card";
import Menu from "../../../components/menus/menu";
import FormSessao from "../components/formSessao";
import ModalTableSessao from "../components/modalTableSessao";

export default function Sessoes(){
    return (
        <>
        {/* <Menu /> */}

        <hr></hr>

        <figure class="text-center">
            <blockquote class="blockquote">
            <p>
                <h1>Cadastro de Sessões</h1>
            </p>
            </blockquote>
            <figcaption class="blockquote-footer">
            Cadastre as sessões dos filmes. 
            </figcaption>
        </figure>
        
        <FormSessao />

        <hr></hr>

        <figure class="text-center">
                      
            <h1 style={{padding: "12px"}}>Sessões CineBTS</h1>
                        
            <div className="text-center">
                <ModalTableSessao
                labelBotton="Ver Lista de Sessões"
                labelModal="Sessões Cadastradas"
                textoModal="Aqui está a tabela das sessões cadastradas no sistema."
                />
            </div>
                        
        </figure>

        </>
    );
}