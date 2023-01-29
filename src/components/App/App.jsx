import { useState } from 'react';
import { Form } from '../Form/Form';
import { Output } from '../Output/Output';
import { AppAtyled, Container } from './App.styled';
import { LogoMain } from 'images/Logo';
import { useRef } from 'react';

export const App = () => {
  const [bill, setBill] = useState(0);
  const [perc, setPerc] = useState(0);
  const [people, setPeople] = useState(0);
  const [error, setError] = useState(false);

  const formRef = useRef(null);

  const formProps = {
    setBillValue,
    setCustomTip,
    setPeopleValue,
    error,
  };

  function handleClick() {
    formRef.current.reset();
    setBill(0);
    setPerc(0);
    setPeople(0);
    setError(false);
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

  function setBillValue(value) {
    if (value === '') {
      setBill(0);
      return;
    }

    let fixedValue = value.includes(',') ? value.replace(',', '.') : value;

    if (!validateFloat(fixedValue)) {
      fixedValue = fixedValue.substring(0, value.length - 1);
    }

    setBill(parseFloat(fixedValue));
  }

  function setCustomTip(value) {
    if (value === '') {
      setPerc(0);
      return;
    }
    let tipCustom = null;
    tipCustom = validateFloat(value)
      ? value
      : value.substring(0, value.length - 1);

    setPerc(parseFloat(tipCustom));
  }

  function setPeopleValue(value) {
    if (value === '') {
      setPeople(0);
      setError(false);
      return;
    }
    if (Number(value) === 0) {
      setError(true);
      return;
    }
    setError(false);
    let peopleNumber = 0;
    peopleNumber = validateFloat(value)
      ? value
      : value.substring(0, value.length - 1);
    setPeople(parseFloat(peopleNumber));
  }

  return (
    <Container>
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
