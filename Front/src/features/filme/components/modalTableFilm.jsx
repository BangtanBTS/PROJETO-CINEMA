import { useState } from "react";

export default function ModalTableFilm({
  id = 'modalTableFilm',
  idModal = 'modalTableFilmLabel',
  labelBotton = 'Ver Filmes',
  labelModal = 'Lista de Filmes 🎥',
  textoModal = 'Aqui está a tabela com todos os filmes cadastrados.',
  onEdit = () => {}
}) {
  const [filmes, setFilmes] = useState([]);

  const buscarFilmes = async () => {
    try {
      const response = await fetch("http://localhost:3000/filmes");
      if (!response.ok) throw new Error("Erro ao buscar filmes");
      const dados = await response.json();
      setFilmes(dados);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      setFilmes([]);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este filme?")) return;
    try {
      const response = await fetch(`http://localhost:3000/filmes/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) throw new Error("Erro ao excluir filme");

      alert("Filme excluído com sucesso!");
      buscarFilmes(); // Atualiza a lista
    } catch (err) {
      console.error("Erro ao excluir filme:", err);
      alert("Erro ao excluir filme");
    }
  };

  return (
    <div className="col-12">
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
        onClick={buscarFilmes}
      >
        {labelBotton}
      </button>

      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby={idModal}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={idModal}>
                {labelModal}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {textoModal}

              <div className="table-responsive mt-3">
                <table className="table table-bordered table-striped text-center align-middle">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Título</th>
                      <th>Gênero</th>
                      <th>Descrição</th>
                      <th>Classificação</th>
                      <th>Duração</th>
                      <th>Estreia</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filmes.length > 0 ? (
                      filmes.map((filme) => (
                        <tr key={filme.id}>
                          <td>{filme.id}</td>
                          <td>{filme.titulo}</td>
                          <td>{filme.genero}</td>
                          <td>{filme.descricao}</td>
                          <td>{filme.classificacaoIndicativa || filme.classificacao}</td>
                          <td>{filme.duracao} min</td>
                          <td>{new Date(filme.dataEstreia || filme.estreia).toLocaleDateString("pt-BR")}</td>
                          <td>
                            <div className="d-flex justify-content-center gap-1">
                              <button className="btn btn-sm btn-warning" onClick={() => onEdit(filme)}>
                                Editar
                              </button>
                              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(filme.id)}>
                                Excluir
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8">Nenhum filme cadastrado.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
