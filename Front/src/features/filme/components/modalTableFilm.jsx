import { useState } from "react";

export default function ModalTableFilm({
    id = 'modalTableFilm',
    idModal = 'modalTableFilmLabel',
    labelBotton = 'Ver Filmes',
    labelModal = 'Lista de Filmes 🎥',
    textoModal = 'Aqui está a tabela com todos os filmes cadastrados.'
}) {
    const [filmes, setFilmes] = useState([]);

    const buscarFilmes = async () => {
        try {
            const response = await fetch("http://localhost:3000/filmes");
            if (!response.ok) throw new Error("Erro ao buscar filmes");
            const dados = await response.json();
            setFilmes(dados);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
            setFilmes([]);
        }
    };

    return (
        <div className="col-12">
            <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target={`#${id}`}
                onClick={buscarFilmes}
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
                <div className="modal-dialog modal-lg">
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

                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Título</th>
                                            <th>Gênero</th>
                                            <th>Descrição</th>
                                            <th>Classificação</th>
                                            <th>Duração</th>
                                            <th>Estreia</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filmes.length > 0 ? (
                                            filmes.map((filme) => (
                                                <tr key={filme.id}>
                                                    <td>{filme.id}</td>
                                                    <td>{filme.titulo}</td>
                                                    <td>{filme.genero}</td>
                                                    <td>{filme.descricao}</td>
                                                    <td>{filme.classificacao}</td>
                                                    <td>{filme.duracao} min</td>
                                                    <td>{new Date(filme.estreia).toLocaleDateString()}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7">Nenhum filme cadastrado.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
