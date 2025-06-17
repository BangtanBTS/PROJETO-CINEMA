import { useEffect, useState } from "react";
import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";

export default function FormSessao({ sessaoEditando, setSessaoEditando }) {
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const response = await fetch("http://localhost:3000/filmes");
        const filmesData = await response.json();
        setFilmes(filmesData);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    const fetchSalas = async () => {
      try {
        const response = await fetch("http://localhost:3000/salas");
        const salasData = await response.json();
        setSalas(salasData);
      } catch (error) {
        console.error("Erro ao buscar salas:", error);
      }
    };

    fetchFilmes();
    fetchSalas();
  }, []);

  // Preenche os campos se estiver editando
  useEffect(() => {
    if (sessaoEditando) {
      document.getElementById("inputFilme").value = sessaoEditando.filme?.titulo || "";
      document.getElementById("inputSala").value = sessaoEditando.sala?.nome || "";
      document.getElementById("inputDataHora").value = sessaoEditando.horario?.slice(0, 16) || "";
      document.getElementById("inputValor").value = sessaoEditando.valorIngresso?.toString() || "";
      document.getElementById("inputIdioma").value = sessaoEditando.idioma || "";
      document.getElementById("inputFormato").value = sessaoEditando.formato || "";
    }
  }, [sessaoEditando]);

  const limparCampos = () => {
    document.getElementById("inputFilme").value = "";
    document.getElementById("inputSala").value = "";
    document.getElementById("inputDataHora").value = "";
    document.getElementById("inputValor").value = "";
    document.getElementById("inputIdioma").value = "";
    document.getElementById("inputFormato").value = "";
    setSessaoEditando(null);
  };

  const handleSave = async () => {
    const filme = document.getElementById("inputFilme").value;
    const sala = document.getElementById("inputSala").value;
    const dataHora = document.getElementById("inputDataHora").value;
    const valor = document.getElementById("inputValor").value;
    const idioma = document.getElementById("inputIdioma").value;
    const formato = document.getElementById("inputFormato").value;

    const sessao = {
      filme,
      sala,
      horario: dataHora + ":00",
      valorIngresso: parseFloat(valor),
      idioma,
      formato
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

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro do backend:", errorText);
        throw new Error(errorText);
      }

      alert(`Sessão ${sessaoEditando ? "atualizada" : "cadastrada"} com sucesso!`);
      limparCampos();
    } catch (error) {
      alert("Erro ao salvar sessão: " + error.message);
    }
  };

  return (
    <div className="cadastro_sessao" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5%" }}>
      <form className="row g-3" style={{ width: "46rem" }} onSubmit={(e) => e.preventDefault()}>
        <div className="col-md-6">
          <InputSelect id="inputFilme" label="Filme" placeholder="Escolha um filme"
            options={filmes.map((f) => ({ value: f.titulo, label: f.titulo }))} />
        </div>
        <div className="col-md-6">
          <InputSelect id="inputSala" label="Sala" placeholder="Escolha uma sala"
            options={salas.map((sala) => ({ value: sala.nome, label: sala.nome }))} />
        </div>
        <div className="col-md-6">
          <InputForm id="inputDataHora" label="Data & Hora" placeholder="Data & Hora" type="datetime-local" />
        </div>
        <div className="col-md-6">
          <InputForm id="inputValor" label="Preço" placeholder="R$00,00" type="number" />
        </div>
        <div className="col-md-6">
          <InputSelect id="inputIdioma" label="Idioma" placeholder="Escolha o idioma"
            options={[{ value: "Dublado", label: "Dublado" }, { value: "Legendado", label: "Legendado" }]} />
        </div>
        <div className="col-md-6">
          <InputSelect id="inputFormato" label="Formato" placeholder="Escolha o formato"
            options={[{ value: "2D", label: "2D" }, { value: "3D", label: "3D" }, { value: "IMAX", label: "IMAX" }]} />
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
