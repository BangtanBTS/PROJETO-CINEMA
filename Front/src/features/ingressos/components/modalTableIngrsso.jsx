import { useEffect, useState } from "react";

export default function ModalTableIngresso({
  id = "modalTableIngresso",
  idModal = "modalTableIngressoLabel",
  labelBotton = "Ver Ingressos",
  labelModal = "Ingressos Comprados",
  textoModal = "Aqui está a tabela dos ingressos cadastrados no sistema.",
  onEdit = () => {}
}) {
  const [ingressos, setIngressos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchIngressos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/ingressos");
      if (!response.ok) throw new Error("Erro ao buscar ingressos");
      const data = await response.json();
      setIngressos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este ingresso?")) return;
    try {
      const response = await fetch(`http://localhost:3000/ingressos/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) throw new Error("Erro ao excluir ingresso");

      alert("Ingresso excluído com sucesso!");
      fetchIngressos(); // Atualiza lista
    } catch (err) {
      console.error("Erro ao excluir ingresso:", err);
      alert("Erro ao excluir ingresso");
    }
  };

  useEffect(() => {
    fetchIngressos();
  }, []);

  return (
    <>
      <div className="col-12">
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target={`#${id}`}
          onClick={fetchIngressos}
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

                {loading && <p>Carregando...</p>}
                {error && <p className="text-danger">Erro: {error}</p>}

                {!loading && !error && (
                  <div className="table-responsive mt-3">
                    <table className="table table-bordered table-striped text-center align-middle">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Filme - Sala - Data/Horário</th>
                          <th>Cliente</th>
                          <th>CPF</th>
                          <th>Assento</th>
                          <th>Pagamento</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ingressos.length > 0 ? (
                          ingressos.map((ingresso) => (
                            <tr key={ingresso.id}>
                              <td>{ingresso.id}</td>
                              <td>
                                {`${ingresso.sessao.filme.titulo} - ${ingresso.sessao.sala.nome} - ${new Date(ingresso.sessao.horario).toLocaleString("pt-BR")}`}
                              </td>
                              <td>{ingresso.nomeCliente}</td>
                              <td>{ingresso.cpf}</td>
                              <td>{ingresso.poltrona}</td>
                              <td>{ingresso.pagamento}</td>
                              <td>
                                <div className="d-flex gap-1 justify-content-center">
                                  <button className="btn btn-sm btn-warning" onClick={() => onEdit(ingresso)}>
                                    Editar
                                  </button>
                                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(ingresso.id)}>
                                    Excluir
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7">Nenhum ingresso cadastrado.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
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
    </>
  );
}
