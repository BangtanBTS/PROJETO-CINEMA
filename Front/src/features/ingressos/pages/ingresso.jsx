import Card from "../../../components/cards/card";
import Menu from "../../../components/menus/menu";
import FormIngresso from "../components/formIngresso";
import ModalTableIngresso from "../components/modalTableIngrsso";
import { useState } from "react";

export default function Ingressos() {
  const [ingressoEditando, setIngressoEditando] = useState(null); // ✅ mover aqui

  return (
    <>
      {/* <Menu /> */}

      <hr />

      <figure className="text-center">
        <blockquote className="blockquote">
          <p>
            <h1>Compra de Ingresso</h1>
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Compre seu ingresso para a sessão desejada!
        </figcaption>
      </figure>

      <FormIngresso
        ingressoEditando={ingressoEditando}
        setIngressoEditando={setIngressoEditando}
      />

      <figure className="text-center">
        <h1 style={{ padding: "12px" }}>Ingressos CineBTS</h1>
        <div className="text-center">
          <ModalTableIngresso
            labelBotton="Ver Lista de Ingressos"
            labelModal="Ingressos Comprados"
            textoModal="Aqui está a tabela dos ingressos cadastrados no sistema."
            onEdit={setIngressoEditando} // ✅ necessário para editar
          />
        </div>
      </figure>
    </>
  );
}
