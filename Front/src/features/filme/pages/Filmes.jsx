import CardResume from "../../../components/cards/cardResume";
import Menu from "../../../components/menus/menu";
import FormFilms from "../components/formFilm";
import ModalTableFilm from "../components/modalTableFilm";

export default function Filmes() {
    return (
        <>
        {/* <Menu /> */}

        <div className="container">
            <br />
            <br />
            <div className="row">
                <CardResume 
                    src="/cartazes/bela.jpg"
                />
                <CardResume 
                    src="/cartazes/cinderela.jpg"
                />
                <CardResume 
                    src="/cartazes/malevola.jpg"
                />
            </div>
        </div>

        <hr />

        <figure className="text-center">
            <blockquote className="blockquote">
                <h1>Cadastrar Filmes</h1>
            </blockquote>
            <figcaption className="blockquote-footer">
                Cadastre os filmes aqui.
            </figcaption>
        </figure>

        <FormFilms />

        <hr />

        <figure className="text-center">
            <h1 style={{ padding: "12px" }}>Filmes CineBTS</h1>
            <div className="text-center">
                <ModalTableFilm
                    labelBotton="Ver Lista de Filmes"
                    labelModal="Filmes Cadastrados"
                    textoModal="Aqui está a tabela dos filmes cadastrados no sistema."
                />
            </div>
        </figure>
        </>
    );
}
