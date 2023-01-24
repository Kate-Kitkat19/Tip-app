import { useState } from 'react';
import { Attribution } from './Attribution/Attribution';
import { Form } from './Form/Form';
import { Output } from './Output/Output';

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
    return billSplit + tipSplit;
  }

  return (
    <div>
      <Form {...formProps}></Form>
      <br></br>
      <Output
        tipPerPerson={countTipPerPerson()}
        totalPerPerson={countTotalSum()}
      ></Output>
      <br></br>
      <Attribution></Attribution>
    </div>
  );
};
