import { useState } from 'react';
import { Form } from '../Form/Form';
import { Output } from '../Output/Output';
import { AppAtyled, Container, Title } from './App.styled';

export const App = () => {
  const [bill, setBill] = useState(0);
  const [perc, setPerc] = useState(0);
  const [people, setPeople] = useState(1);

  const formProps = {
    setBill,
    setPerc,
    setPeople,
  };

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

  return (
    <Container>
      <Title>Splitter</Title>
      <AppAtyled>
        <Form {...formProps}></Form>

        <Output
          tipPerPerson={countTipPerPerson()}
          totalPerPerson={countTotalSum()}
        ></Output>
      </AppAtyled>
    </Container>
  );
};
