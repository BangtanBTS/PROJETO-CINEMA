import { useEffect, useState } from "react";
import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";

export default function FormIngresso({ ingressoEditando, setIngressoEditando }) {
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    const fetchSessoes = async () => {
      try {
        const response = await fetch("http://localhost:3000/sessoes");
        const data = await response.json();
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

  useEffect(() => {
    if (ingressoEditando) {
      document.getElementById("inputSessao").value = ingressoEditando.sessao?.id || "";
      document.getElementById("inputCliente").value = ingressoEditando.nomeCliente || "";
      document.getElementById("inputCPF").value = ingressoEditando.cpf || "";
      document.getElementById("inputAssesnto").value = ingressoEditando.poltrona || "";
      document.getElementById("inputPagamento").value = ingressoEditando.pagamento || "";
    }
  }, [ingressoEditando]);

  const limparCampos = () => {
    document.getElementById("inputSessao").value = "";
    document.getElementById("inputCliente").value = "";
    document.getElementById("inputCPF").value = "";
    document.getElementById("inputAssesnto").value = "";
    document.getElementById("inputPagamento").value = "";
    setIngressoEditando(null);
  };

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

    const url = ingressoEditando
      ? `http://localhost:3000/ingressos/${ingressoEditando.id}`
      : "http://localhost:3000/ingressos";
    const method = ingressoEditando ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ingresso),
      });

      if (!response.ok) throw new Error("Erro ao salvar ingresso");

      alert(`Ingresso ${ingressoEditando ? "atualizado" : "cadastrado"} com sucesso!`);
      limparCampos();
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
            labelBotton={ingressoEditando ? "Atualizar Ingresso" : "Comprar Ingresso"}
            labelModal={`Ingresso ${ingressoEditando ? "Atualizado" : "Comprado"}`}
            textoModal={`Ingresso ${ingressoEditando ? "atualizado" : "comprado"} com sucesso! 🎉`}
            onSave={handleSave}
          />
        </div>
      </form>
      <hr />
    </div>
  );
}
