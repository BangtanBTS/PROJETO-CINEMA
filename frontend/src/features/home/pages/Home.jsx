import Menu from "../../../components/menus/menu";
import Carrosel from "../components/carrosel/carrosel";

export default function Home() {
    return(
        <>
        {/* <Menu /> */}
        <Carrosel 
            src1="/cartazes/walter-cover.png"
            src2="/cartazes/rago.png"
            src3="/cartazes/duna.png"
        />
        <div className="container mt-5">
            <h1 className="text-center" style={{fontWeight: "bolder"}}>Bem-vindo ao CineBTS🎬</h1>
            <p className="text-center">Aqui você pode encontrar os melhores filmes e sessões disponíveis.</p>
            <div className="row" style={{display: "flex", textAlign: "center"}}>
                <div className="col-md-4">
                    <h2>Filmes em Cartaz</h2>
                    <p>Confira os filmes que estão em cartaz no CineBTS.</p>
                </div>
                <div className="col-md-4">
                    <h2>Salas</h2>
                    <p>Conheça nossas salas de cinema e suas capacidades.</p>
                </div>
                <div className="col-md-4">
                    <h2>Sessões</h2>
                    <p>Veja os horários das sessões disponíveis.</p>
                </div>
            </div>
        </div>
        </>
    );
}