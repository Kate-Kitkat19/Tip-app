import { useState } from 'react';
import { Form } from '../Form/Form';
import { Output } from '../Output/Output';
import { AppAtyled, Container } from './App.styled';
import { LogoMain } from 'images/Logo';
import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [bill, setBill] = useState(0);
  const [perc, setPerc] = useState(0);
  const [people, setPeople] = useState(0);

  const formRef = useRef(null);

  const formProps = {
    setBillValue,
    setCustomTip,
    setPeopleValue,
  };

  function handleClick() {
    formRef.current.reset();
    setBill(0);
    setPerc(0);
    setPeople(0);
  }

  function countTipPerPerson() {
    if (bill === 0 || perc === 0 || people === 0) {
      return;
    }

    const tipSum = (bill * perc) / 100;
    const rawTip = tipSum / people;

    return rawTip.toFixed(2);
  }

  function countTotalSum() {
    if (bill === 0 || perc === 0 || people === 0) {
      return;
    }

    const billSplit = bill / people;
    const tipSplit = Number(countTipPerPerson());
    const total = billSplit + tipSplit;
    return total.toFixed(2);
  }

  function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
  }

  // function validateInt(s) {
  //   const rgx = /^[0-9]*$/;
  //   return s.match(rgx);
  // }

  function setBillValue(value) {
    let fixedValue = value.includes(',') ? value.replace(',', '.') : value;

    if (!validateFloat(fixedValue)) {
      fixedValue = fixedValue.substring(0, value.length - 1);
    }

    setBill(parseFloat(fixedValue));
  }

  function setCustomTip(value) {
    let tipCustom = null;
    tipCustom = validateFloat(value)
      ? value
      : value.substring(0, value.length - 1);

    setPerc(parseFloat(tipCustom));
  }

  function setPeopleValue(value) {
    let peopleNumber = null;
    peopleNumber = validateFloat(value)
      ? value
      : value.substring(0, value.length - 1);
    setPeople(parseFloat(peopleNumber));
  }

  return (
    <Container>
      <ToastContainer></ToastContainer>
      <LogoMain></LogoMain>
      <AppAtyled>
        <Form {...formProps} ref={formRef}></Form>

        <Output
          tipPerPerson={countTipPerPerson()}
          totalPerPerson={countTotalSum()}
          resetForm={handleClick}
        ></Output>
      </AppAtyled>
    </Container>
  );
};
