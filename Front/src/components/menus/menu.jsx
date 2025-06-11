import { Link } from "react-router-dom";

function Menu(){
    return (
        <>
        {/* Colocar as variáveis na assinatura para saber o active */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home">CineBTS 🎬</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Filmes">Filmes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Salas">Salas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Sessoes">Sessões</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Ingressos">Ingressos</Link>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link active" href="ingressos.html">Ingressos</a>
                </li> */}
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
}

export default Menu;