import './Button.css'

export default function Button(props) {
    const {
        onClick,
        children,
    } = props

    return (
        <button className='button' onClick={(e) => {
            e.preventDefault()
            onClick()
        }}>
            {children}
        </button>
    )
}