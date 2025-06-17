import { useState, useEffect } from "react";

export default function SalaForm({ salaEditando, setSalaEditando }) {
  const [nome, setNome] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [tipo, setTipo] = useState("");

  useEffect(() => {
    if (salaEditando) {
      setNome(salaEditando.nome);
      setCapacidade(salaEditando.capacidade);
      setTipo(salaEditando.tipo);
    }
  }, [salaEditando]);

  const limparCampos = () => {
    setNome("");
    setCapacidade("");
    setTipo("");
    setSalaEditando(null);
  };

  const handleSave = async () => {
    const dados = {
      nome,
      capacidade: parseInt(capacidade),
      tipo
    };

    try {
      const response = await fetch(
        salaEditando
          ? `http://localhost:3000/salas/${salaEditando.id}`
          : "http://localhost:3000/salas",
        {
          method: salaEditando ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados)
        }
      );

      if (!response.ok) throw new Error("Erro ao salvar sala");

      alert(`Sala ${salaEditando ? "atualizada" : "cadastrada"} com sucesso!`);
      limparCampos();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao salvar sala");
    }
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label className="form-label">Nome da Sala</label>
        <input
          type="text"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Capacidade</label>
        <input
          type="number"
          className="form-control"
          value={capacidade}
          onChange={(e) => setCapacidade(e.target.value)}
        />
      </div>

     

      <button className="btn btn-primary" onClick={handleSave}>
        {salaEditando ? "Atualizar" : "Salvar"}
      </button>
    </div>
  );
}
