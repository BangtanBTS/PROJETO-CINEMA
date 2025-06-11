export default function InputSelect({
    id,
    label="Texto que você esqueceu de colocar kk",
    defaultValue="Texto padrão",
    placeholder="Texto padrão",
    options = [
        {value: "Padrão", label: "Padrão"},
    ]
}){
    return(
        <>
        <label htmlFor={id} className="form-label">{label}</label>
                <select id={id} className="form-select" defaultValue={defaultValue}>
                    <option value="" disabled>{placeholder}</option>
                    {options.map((opt, idx) => (
                        <option key={idx} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
        </>
    );
}