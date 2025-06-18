import { useState, useEffect } from "react";

export default function FormFilm({ filmeEditando, setFilmeEditando }) {
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    descricao: "",
    classificacaoIndicativa: "",
    duracao: "",
    dataEstreia: ""
  });

  useEffect(() => {
    console.log("Recebi filmeEditando:", filmeEditando);
    if (filmeEditando) {
      setFormData({
        titulo: filmeEditando.titulo || "",
        genero: filmeEditando.genero || "",
        descricao: filmeEditando.descricao || "",
        classificacaoIndicativa: filmeEditando.classificacaoIndicativa || "",
        duracao: filmeEditando.duracao?.toString() || "",
        dataEstreia: filmeEditando.dataEstreia?.slice(0, 10) || ""
      });
    }
  }, [filmeEditando]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const limparCampos = () => {
    setFormData({
      titulo: "",
      genero: "",
      descricao: "",
      classificacaoIndicativa: "",
      duracao: "",
      dataEstreia: ""
    });
    setFilmeEditando(null);
  };

  const handleSave = async () => {
    const dados = {
      ...formData,
      duracao: parseInt(formData.duracao),
      dataEstreia: new Date(formData.dataEstreia).toISOString(),
      foto: "/cartazes/default.jpg"
    };

    const url = filmeEditando
      ? `/api/filmes/${filmeEditando.id}`
      : "/api/filmes";

    const method = filmeEditando ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
      });

      if (!response.ok) {
        const erro = await response.text();
        throw new Error(`Erro ao salvar filme: ${erro}`);
      }

      alert(`Filme ${filmeEditando ? "atualizado" : "cadastrado"} com sucesso!`);
      limparCampos();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="cadastro_film" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5%" }}>
      <form className="row g-3" style={{ width: "46rem" }} onSubmit={(e) => e.preventDefault()}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            id="titulo"
            className="form-control"
            type="text"
            value={formData.titulo}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Gênero</label>
          <select
            id="genero"
            className="form-select"
            value={formData.genero}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="Comédia">Comédia</option>
            <option value="Românce">Românce</option>
            <option value="Ficção">Ficção</option>
            <option value="Ação">Ação</option>
            <option value="Animação">Animação</option>
            <option value="Drama">Drama</option>
          </select>
        </div>

        <div className="col-12">
          <label className="form-label">Descrição</label>
          <input
            id="descricao"
            className="form-control"
            type="text"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Classificação Indicativa</label>
          <select
            id="classificacaoIndicativa"
            className="form-select"
            value={formData.classificacaoIndicativa}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="L">L</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Duração (min)</label>
          <input
            id="duracao"
            className="form-control"
            type="number"
            value={formData.duracao}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Data de Estreia</label>
          <input
            id="dataEstreia"
            className="form-control"
            type="date"
            value={formData.dataEstreia}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 text-center">
          <button className="btn btn-primary" onClick={handleSave}>
            {filmeEditando ? "Atualizar" : "Salvar"}
          </button>
        </div>
      </form>
    </div>
  );
}
