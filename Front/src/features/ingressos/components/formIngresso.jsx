import { useEffect, useState } from "react";
import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";

export default function FormIngresso() {
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    const fetchSessoes = async () => {
      try {
        const response = await fetch("http://localhost:3000/sessoes");
        const data = await response.json();

        // ✅ Usa o nome do filme e da sala (vindo via include do backend)
        const opcoes = data.map((sessao) => ({
          value: sessao.id,
          label: `${sessao.filme.titulo} - ${sessao.sala.nome} - ${new Date(sessao.horario).toLocaleString("pt-BR")}`,
        }));

        setSessoes(opcoes);
      } catch (error) {
        console.error("Erro ao buscar sessões:", error);
      }
    };

    fetchSessoes();
  }, []);

  const handleSave = async () => {
    const sessaoId = document.getElementById("inputSessao").value;
    const nomeCliente = document.getElementById("inputCliente").value;
    const cpf = document.getElementById("inputCPF").value;
    const poltrona = document.getElementById("inputAssesnto").value;
    const pagamento = document.getElementById("inputPagamento").value;

    const ingresso = {
      sessaoId: Number(sessaoId),
      nomeCliente,
      cpf,
      poltrona,
      pagamento,
    };

    try {
      const response = await fetch("http://localhost:3000/ingressos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ingresso),
      });

      if (!response.ok) throw new Error("Erro ao salvar ingresso");

      alert("Ingresso cadastrado com sucesso!");

      // Limpa campos
      document.getElementById("inputSessao").value = "";
      document.getElementById("inputCliente").value = "";
      document.getElementById("inputCPF").value = "";
      document.getElementById("inputAssesnto").value = "";
      document.getElementById("inputPagamento").value = "";
    } catch (err) {
      alert("Erro ao salvar ingresso: " + err.message);
    }
  };

  return (
    <div className="cadastro_ingresso" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5%" }}>
      <form className="row g-3" style={{ width: "46rem" }} onSubmit={(e) => e.preventDefault()}>
        <div className="col-md-6">
          <InputSelect
            id="inputSessao"
            label="Filme - Sala - Data/Hora"
            placeholder="Filme - Sala - Data/Hora"
            options={sessoes}
          />
        </div>
        <div className="col-md-6">
          <InputForm id="inputCliente" type="text" label="Nome do Cliente" placeholder="Digite seu nome" />
        </div>
        <div className="col-md-6">
          <InputForm id="inputCPF" label="CPF do Cliente" placeholder="Digite seu CPF" type="number" />
        </div>
        <div className="col-md-6">
          <InputForm id="inputAssesnto" label="Assento" placeholder="A10" type="text" />
        </div>
        <div className="col-md-6">
          <InputSelect
            id="inputPagamento"
            label="Forma de Pagamento"
            placeholder="E o pix?"
            options={[
              { value: "Crédito", label: "Crédito" },
              { value: "Débito", label: "Débito" },
              { value: "PIX", label: "PIX" },
              { value: "Dinheiro", label: "Dinheiro" },
            ]}
          />
        </div>
        <div className="col-12">
          <ModalFilme
            id="exampleModal"
            idModal="exampleModalLabel"
            labelBotton="Comprar Ingresso"
            labelModal="Ingresso Comprado"
            textoModal="Ingresso comprado com sucesso! 🎉"
            onSave={handleSave}
          />
        </div>
      </form>
      <hr />
    </div>
  );
}
