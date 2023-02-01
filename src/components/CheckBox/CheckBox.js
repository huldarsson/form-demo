import './CheckBox.css'

export default function CheckBox(props) {
    const {
        label,
        onChange,
        isChecked,
    } = props
    return (


        <label className={`checkbox ${isChecked ? 'checkbox--checked' : ''}`}>
            <input className='checkbox__input' type='checkbox' onChange={() => onChange()} />
            <span
                className={`checkbox__box ${isChecked ? 'checkbox__box--checked' : ''}`}
            />
            {label}
        </label>
    )
}