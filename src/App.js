import './App.css';
import Form from './components/Form/Form';
import FormSection from './components/FormSection/FormSection';
import Title from './components/Title/Title';
import TextInput from './components/TextInput/TextInput';
import { useImmer } from 'use-immer';
import RadioButton from './components/RadioButton/RadioButton';
import CardInfo from './components/CardInfo/CardInfo';
import CheckBox from './components/CheckBox/CheckBox';
import Button from './components/Button/Button';

function App() {
  const [form, setForm] = useImmer({
    person: {
      name: '',
      ssn: '',
      email: '',
      phone: ''
    },
    payment: {
      type: 'card'
    },
    card: {
      cardNumber: '',
      expDate: '',
      cvc: ''
    },
    isSubscribed: false,
    errors: {
      name: null,
      ssn: null,
      email: null,
      phone: null,
      card: {
        cardNumber: null,
        expDate: null,
        cvc: null,
      }
    }
  })

  function handleSubmit(){
    if(form.person.name.length === 0){
      setForm(e => {e.errors.name = 'Upplýsingar vantar'})
    } else {
      setForm(e => { e.errors.name = null})
    }

    if(form.person.ssn.length === 0){
      setForm(e => {e.errors.ssn = 'Upplýsingar vantar'})
    }else {
      setForm(e => { e.errors.ssn = null})
    }

    if(form.person.email.length === 0){
      setForm(e => {e.errors.email = 'Upplýsingar vantar'})
    }else {
      setForm(e => { e.errors.email = null})
    }

    if(form.person.phone.length === 0){
      setForm(e => {e.errors.phone = 'Upplýsingar vantar'})
    }else {
      setForm(e => { e.errors.phone = null})
    }

    if(form.card.cardNumber.length === 0){
      setForm(e => {e.errors.card.cardNumber = ' '})
    }else {
      setForm(e => { e.errors.card.cardNumber = null})
    }

    if(form.card.expDate.length === 0){
      setForm(e => {e.errors.card.expDate = ' '})
    }else {
      setForm(e => { e.errors.card.expDate = null})
    }

    if(form.card.cvc.length === 0){
      setForm(e => {e.errors.card.cvc = ' '})
    }else {
      setForm(e => { e.errors.card.cvc = null})
    }
  }

  return (
    <div className="app">
      <Title >
        Tilrauna form
      </Title>
      <Form>
        <FormSection
          title='Persónuupplýsingar'
        >
          <TextInput
            type='text'
            label='Nafn'
            hintText='Sláðu inn nafn þitt'
            value={form.person.name}
            onChange={(value) => setForm(e => { e.person.name = value })}
            error={form.errors.name}
          />
          <TextInput
            type='number'
            label='Kennitala'
            hintText='000000-0000'
            value={form.person.ssn}
            onChange={(value) => setForm(e => { e.person.ssn = value })}
            width='60%'
            error={form.errors.ssn}
          />
          <TextInput
            type='email'
            label='Netfang viðtakanda'
            hintText='notandi@vefur.is'
            value={form.person.email}
            onChange={(value) => setForm(e => { e.person.email = value })}
            error={form.errors.email}

          />
          <TextInput
            type='number'
            label='Símanúmer'
            hintText='000-0000'
            value={form.person.phone}
            onChange={(value) => setForm(e => { e.person.phone = value })}
            width='60%'
            error={form.errors.phone}

          />
        </FormSection>
        <FormSection
          title='Greiðsla'
        >
          <RadioButton
            label='Greiðsluseðill í heimabanka'
            isSelected={form.payment.type === 'slip'}
            onSelected={() => setForm(e => { e.payment.type = 'slip' })}
          />
          <RadioButton
            label='Greiðslukort'
            isSelected={form.payment.type === 'card'}
            onSelected={() => setForm(e => { e.payment.type = 'card' })}
          />
        </FormSection>

        <FormSection
          title='Kortaupplýsingar'
        >
          <CardInfo
            card={form.card}
            onCardChange={(card) => setForm(e => { e.card = card })}
            errors={form.errors.card}
          />
        </FormSection>
        <FormSection
          title='Áskriftir'
        >
          <CheckBox
            label='Já, ég vil gerast félagi og fá árlega félagsgjöld í heimabanka.'
            isChecked={form.isSubscribed}
            onChange={() => setForm(e => { e.isSubscribed = !e.isSubscribed })}

          />
        </FormSection>
        <div style={{ marginBottom: 60, marginTop: 60 }}>
          <Button
          onClick={handleSubmit}
          >
            Staðfesta
          </Button>
        </div>
      </ Form >
    </div>
  );
}

export default App;
