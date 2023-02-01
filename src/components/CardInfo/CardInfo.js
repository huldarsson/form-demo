import TextInput from '../TextInput/TextInput'
import './CardInfo.css'

export default function CardInfo(props) {
    const {
        card,
        onCardChange,
        errors
    } = props

    return (
        <div className='card-info'>
            <div style={{
                width: '50%',
                paddingRight: 30
            }}>
                <TextInput
                    className='card-info__item'
                    type='number'
                    label='Kortanúmer'
                    hintText='0000-0000-0000'
                    value={card.number}
                    onChange={(value) => onCardChange({ ...card, cardNumber: value })}
                    error={errors.cardNumber}
                />
            </div>
            <div style={{
                width: '25%',
                paddingRight: 30
            }}>
                <TextInput
                    className='card-info__item'
                    style={{ padding: 20 }}
                    type='number'
                    label='Gildir til'
                    hintText='MM-ÁÁ'
                    value={card.expDate}
                    onChange={(value) => onCardChange({ ...card, expDate: value })}
                    error={errors.expDate}

                />
            </div>
            <div style={{width: '20%'}}>
                <TextInput
                    className='card-info__item'
                    type='number'
                    label='CVC'
                    hintText='000'
                    value={card.cvc}
                    onChange={(value) => onCardChange({ ...card, cvc: value })}
                    error={errors.cvc}
                />
            </div>
        </div>
    )
}