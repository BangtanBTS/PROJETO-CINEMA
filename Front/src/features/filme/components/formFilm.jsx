import { useEffect, useState } from "react";
import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";

export default function FormSessao({ sessaoEditando, setSessaoEditando }) {
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);
  const [formData, setFormData] = useState({
    filme: "",
    sala: "",
    horario: "",
    valorIngresso: "",
    idioma: "",
    formato: ""
  });

  // Buscar filmes e salas
  useEffect(() => {
    fetch("http://localhost:3000/filmes")
      .then((res) => res.json())
      .then(setFilmes)
      .catch((err) => console.error("Erro ao buscar filmes", err));

    fetch("http://localhost:3000/salas")
      .then((res) => res.json())
      .then(setSalas)
      .catch((err) => console.error("Erro ao buscar salas", err));
  }, []);

  // Quando for editar
  useEffect(() => {
    if (sessaoEditando) {
      setFormData({
        filme: sessaoEditando.filme?.titulo || "",
        sala: sessaoEditando.sala?.nome || "",
        horario: sessaoEditando.horario?.slice(0, 16) || "",
        valorIngresso: sessaoEditando.valorIngresso?.toString() || "",
        idioma: sessaoEditando.idioma || "",
        formato: sessaoEditando.formato || ""
      });

      // Fecha o modal da tabela ao clicar em "Editar"
      const modal = bootstrap.Modal.getInstance(document.getElementById("modalTableSessao"));
      if (modal) modal.hide();
    }
  }, [sessaoEditando]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace("input", "").charAt(0).toLowerCase() + id.replace("input", "").slice(1);
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const limparCampos = () => {
    setFormData({
      filme: "",
      sala: "",
      horario: "",
      valorIngresso: "",
      idioma: "",
      formato: ""
    });
    setSessaoEditando(null);
  };

  const handleSave = async () => {
    const sessao = {
      filme: formData.filme,
      sala: formData.sala,
      horario: formData.horario + ":00",
      valorIngresso: parseFloat(formData.valorIngresso),
      idioma: formData.idioma,
      formato: formData.formato
    };

    const url = sessaoEditando
      ? `http://localhost:3000/sessoes/${sessaoEditando.id}`
      : "http://localhost:3000/sessoes";

    const method = sessaoEditando ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sessao)
      });

      if (!response.ok) throw new Error("Erro ao salvar sessão");

      alert(`Sessão ${sessaoEditando ? "atualizada" : "cadastrada"} com sucesso!`);
      limparCampos();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="cadastro_sessao" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5%" }}>
      <form className="row g-3" style={{ width: "46rem" }} onSubmit={(e) => e.preventDefault()}>
        <div className="col-md-6">
          <InputSelect
            id="inputFilme"
            label="Filme"
            value={formData.filme}
            onChange={handleChange}
            options={filmes.map((f) => ({ value: f.titulo, label: f.titulo }))}
          />
        </div>
        <div className="col-md-6">
          <InputSelect
            id="inputSala"
            label="Sala"
            value={formData.sala}
            onChange={handleChange}
            options={salas.map((sala) => ({ value: sala.nome, label: sala.nome }))}
          />
        </div>
        <div className="col-md-6">
          <InputForm
            id="inputHorario"
            label="Data & Hora"
            type="datetime-local"
            value={formData.horario}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputForm
            id="inputValorIngresso"
            label="Preço"
            type="number"
            value={formData.valorIngresso}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputSelect
            id="inputIdioma"
            label="Idioma"
            value={formData.idioma}
            onChange={handleChange}
            options={[
              { value: "Dublado", label: "Dublado" },
              { value: "Legendado", label: "Legendado" }
            ]}
          />
        </div>
        <div className="col-md-6">
          <InputSelect
            id="inputFormato"
            label="Formato"
            value={formData.formato}
            onChange={handleChange}
            options={[
              { value: "2D", label: "2D" },
              { value: "3D", label: "3D" },
              { value: "IMAX", label: "IMAX" }
            ]}
          />
        </div>
        <ModalFilme
          idBotao="btn-salvar-sessao"
          idModal="exampleModal"
          labelModal={`Sessão ${sessaoEditando ? "Atualizada" : "Cadastrada"}`}
          labelbotao={sessaoEditando ? "Atualizar" : "Salvar"}
          textoModal={`A sessão foi ${sessaoEditando ? "atualizada" : "cadastrada"} com sucesso! 🎉`}
          onSave={handleSave}
        />
      </form>
    </div>
  );
}
