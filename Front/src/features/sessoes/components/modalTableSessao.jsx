import { useEffect, useState } from "react";

export default function ModalTableSessao({
  id = "modalTableSessao",
  idModal = "modalTableSessaoLabel",
  labelBotton = "Ver Sessões",
  labelModal = "Lista de Sessões 🎬",
  textoModal = "Aqui está a tabela com todas as sessões cadastradas."
}) {
  const [sessoes, setSessoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Busca as sessões da API
  const fetchSessoes = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/sessoes");
      if (!response.ok) throw new Error("Erro ao buscar sessões");
      const data = await response.json();
      setSessoes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessoes();
  }, []);

  // Função auxiliar para formatar data/hora
  const formatarDataHora = (dataISO) => {
    const data = new Date(dataISO);
    return data.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="col-12">
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
        onClick={fetchSessoes}
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
                        <th>Filme</th>
                        <th>Sala</th>
                        <th>Data & Hora</th>
                        <th>Valor (R$)</th>
                        <th>Idioma</th>
                        <th>Formato</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessoes.length > 0 ? (
                        sessoes.map((sessao) => (
                          <tr key={sessao.id}>
                            <td>{sessao.id}</td>
                            <td>{sessao.filme?.titulo || "—"}</td>
                            <td>{sessao.sala?.nome || "—"}</td>
                            <td>{formatarDataHora(sessao.horario)}</td>
                            <td>{sessao.valorIngresso.toFixed(2)}</td>
                            <td>{sessao.idioma}</td>
                            <td>{sessao.formato}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7">Nenhuma sessão cadastrada.</td>
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
  );
}
