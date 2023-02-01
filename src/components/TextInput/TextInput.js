import './TextInput.css'

export default function TextInput(props) {
    const {
        type,
        label,
        hintText,
        value,
        onChange,
        width,
        error
    } = props

    return (
        <div className='text-input' style={{ width: width }}>
            <label className={`text-input__label ${error && 'text-input__label--error'}`} htmlFor={label}>{label}</label>
            <input className={`text-input__input ${error && 'text-input__input--error'}`}
                type={type}
                id={label}
                name={label}
                placeholder={error ? error : hintText}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}