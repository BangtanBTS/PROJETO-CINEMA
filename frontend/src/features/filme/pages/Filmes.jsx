import { useState } from "react";
import CardResume from "../../../components/cards/cardResume";
import FormFilm from "../components/formFilm"; // nome correto e com letra maiúscula
import ModalTableFilm from "../components/modalTableFilm";

export default function Filmes() {
  const [filmeEditando, setFilmeEditando] = useState(null);

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <CardResume src="/cartazes/bela.jpg" />
          <CardResume src="/cartazes/cinderela.jpg" />
          <CardResume src="/cartazes/malevola.jpg" />
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

      <FormFilm
         key={filmeEditando?.id || "novo"} // força re-render ao mudar edição
         filmeEditando={filmeEditando}
         setFilmeEditando={setFilmeEditando}
      />


      <hr />

      <figure className="text-center">
        <h1 style={{ padding: "12px" }}>Filmes CineBTS</h1>
        <div className="text-center">
          <ModalTableFilm
            labelBotton="Ver Lista de Filmes"
            labelModal="Filmes Cadastrados"
            textoModal="Aqui está a tabela dos filmes cadastrados no sistema."
            onEdit={setFilmeEditando}
          />
        </div>
      </figure>
    </>
  );
}
