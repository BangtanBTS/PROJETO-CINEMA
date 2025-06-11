import Menu from '../../../components/menus/menu';
import Carrosel from '../../home/components/carrosel/carrosel';
import SalaForm from '../components/formSala';
import ModalTableSala from '../components/modalTableSala';

export default function Salas() {
  return (
    <>
      {/* <Menu /> */}

      <hr />

      <figure className="text-center">
        <blockquote className="blockquote">
          <h1>Cadastrar Salas</h1>
        </blockquote>
        <figcaption className="blockquote-footer">
          Cadastre uma nova sala!
        </figcaption>
      </figure>

      <SalaForm />

      <hr />

      <figure className="text-center">
        <h1 style={{ padding: "12px" }}>Salas CineBTS</h1>
        <div className="text-center">
          <ModalTableSala
            labelBotton="Ver Lista de Salas"
            labelModal="Salas Cadastradas"
            textoModal="Salas cadastradas no sistema."
          />
        </div>
      </figure>
    </>
  );
}
