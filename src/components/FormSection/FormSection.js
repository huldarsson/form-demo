import './FormSection.css'
export default function FormSection(props){
    const {
        title,
        children
    } = props


    return (
        <div className='form-section'>
            <h2 className='form-section__title'>
                {title}
            </h2>
            {children}
        </div>
    )
}