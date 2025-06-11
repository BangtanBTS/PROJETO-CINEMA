export default function InputForm (
    { 
        id,
        type = "text",
        label,
        placeholder="texto aleatório",	
    }
){
    return(
        <>
        <label htmlFor={id} className="form-label">{label}</label>
        <input type={type} className="form-control" id={id} placeholder={placeholder}></input>
        </>
    );
}