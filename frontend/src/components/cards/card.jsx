import BottonLink from "../botoes/botaoLink";
export default function Card({
    src="/cartazes/Novo Projeto (9).png",
    alt="",
    href="ingressos.html",
}) {
    return(
        <>
        {/* O Sr. Raposo prometeu à esposa que deixaria a vida de roubos de galinhas. Porém, a proximidade do novo lar com as fazendas de Boggis, Bunce e Bean faz com que volte à velha vida. Só que logo o trio de fazendeiros se une para capturá-lo. */}
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                <img src={src} alt="" className="card-img-top"></img>
                
            </div>
        </div>
        </>
    );
}