import { useState } from "react";

export default function SalaForm() {
  const [nome, setNome] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSave = async () => {
    const dados = {
      nome: nome, // ✅ backend espera isso
      capacidade: parseInt(capacidade),
      tipo: tipo,
    };

    console.log("Enviando:", dados);

    try {
      const response = await fetch("http://localhost:3000/salas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        const erro = await response.json();
        throw new Error(JSON.stringify(erro));
      }

      alert("Sala cadastrada com sucesso!");
      setNome("");
      setCapacidade("");
      setTipo("");
    } catch (error) {
      console.error("Erro ao salvar sala:", error);
      alert("Erro ao salvar sala: " + error.message);
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
        Salvar
      </button>
    </div>
  );
}
