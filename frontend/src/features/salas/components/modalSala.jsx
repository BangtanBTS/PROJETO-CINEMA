export default function ModalSala({
    idBotao,
    idModal,
    labelModal = "Sala Cadastrada",
    labelbotao = "Salvar",
    textoModal = "A sala foi cadastrada com sucesso!",
    onSave = () => {},
}) {
    return (
        <div className="col-12">
            <button
                type="button"
                className="btn btn-dark"
                id={idBotao}
                onClick={onSave}
            >
                {labelbotao}
            </button>

            <div
                className="modal fade"
                id={idModal}
                tabIndex="-1"
                aria-labelledby={`${idModal}Label`}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {labelModal}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">{textoModal}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
