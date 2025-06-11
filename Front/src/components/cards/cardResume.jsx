export default function CardResume({
    src = "/cartazes/Novo Projeto (9).png",
    alt = "",
}) {
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                <img src={src} alt={alt} className="card-img-top" />
            </div>
        </div>
    );
}
