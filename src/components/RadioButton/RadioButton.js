import './RadioButton.css'

export default function RadioButton(props) {
    const {
        label,
        isSelected,
        onSelected,
    } = props

    return (
        <div className={`radio-button  ${isSelected && 'radio-button--selected'}`} onClick={() => onSelected()}>
            <div className={`radio-button__circle ${isSelected && 'radio-button__circle--selected'}`} />
            {label}
        </div>
    )
}