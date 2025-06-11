export default function BottonLink({
    href="ingressos.html",
    label="Esqueceu desse label?",
}){
    return(
        <>
        <a href={href} className="btn btn-dark">{label}</a>
        </>
    );
}