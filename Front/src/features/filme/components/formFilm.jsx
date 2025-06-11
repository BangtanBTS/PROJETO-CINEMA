import * as bootstrap from "bootstrap";
import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "./modalFilme";

export default function FormFilms() {
    const handleSave = async () => {
      const titulo = document.getElementById("inputTitulo").value;
      const genero = document.getElementById("inputGenero").value;
      const descricao = document.getElementById("inputDescricao").value;
      const classificacaoIndicativa = document.getElementById("inputClassificacaoIndicativa").value;
      const duracao = document.getElementById("inputDuracao").value;
      const dataEstreia = document.getElementById("inputDataEstreia").value;

      const novoFilme = {
         titulo,
         genero,
         descricao,
         classificacaoIndicativa,
         duracao: Number(duracao),
         dataEstreia: new Date(dataEstreia).toISOString(),
         foto: "/cartazes/default.jpg" // ou outro valor padrão, se ainda não estiver usando upload
      };

      try {
         console.log("Enviando:", novoFilme);

         const response = await fetch("http://localhost:3000/filmes", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(novoFilme)
         });

         if (!response.ok) throw new Error("Erro ao cadastrar filme");

         // limpar campos
         document.getElementById("inputTitulo").value = "";
         document.getElementById("inputGenero").value = "";
         document.getElementById("inputDescricao").value = "";
         document.getElementById("inputClassificacaoIndicativa").value = "";
         document.getElementById("inputDuracao").value = "";
         document.getElementById("inputDataEstreia").value = "";

         const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
         modal.show();

      } catch (error) {
         console.error("Erro ao salvar filme:", error);
         const textoErro = await response.text(); // pegue o erro da resposta do backend
         alert("Erro ao salvar filme:\n" + textoErro);
      }

    };


    return (
        <div className="cadastro_film" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5%" }}>
            <form className="row g-3" style={{ width: "46rem" }} onSubmit={(e) => e.preventDefault()}>
                <div className="col-md-6">
                    <InputForm id="inputTitulo" label="Título" placeholder="Título do filme" />
                </div>
                <div className="col-md-6">
                    <InputSelect
                        id="inputGenero"
                        label="Gênero"
                        defaultValue="Gênero..."
                        options={[
                            { value: "Comédia", label: "Comédia" },
                            { value: "Românce", label: "Românce" },
                            { value: "Ficção", label: "Ficção" },
                            { value: "Ação", label: "Ação" },
                            { value: "Animação", label: "Animação" },
                            { value: "Drama", label: "Drama" }
                        ]}
                    />
                </div>
                <div className="col-12">
                    <InputForm id="inputDescricao" label="Descrição" placeholder="Sinópse do filme" />
                </div>
                <div className="col-12">
                    <InputSelect
                        id="inputClassificacaoIndicativa"
                        label="Classificação Indicativa"
                        options={[
                            { value: "L", label: "L" },
                            { value: "10", label: "10" },
                            { value: "12", label: "12" },
                            { value: "14", label: "14" },
                            { value: "16", label: "16" },
                            { value: "18", label: "18" }
                        ]}
                    />
                </div>
                <div className="col-md-6">
                    <InputForm id="inputDuracao" label="Duração (min)" type="number" placeholder="Duração do filme" />
                </div>
                <div className="col-md-6">
                    <InputForm id="inputDataEstreia" label="Data de Estreia" type="date" />
                </div>

                <ModalFilme
                    id="exampleModal"
                    idModal="exampleModalLabel"
                    labelBotton="Salvar"
                    labelModal="Filme Cadastrado"
                    textoModal="Filme cadastrado com sucesso!"
                    onSave={handleSave}
                />
            </form>
        </div>
    );
}
