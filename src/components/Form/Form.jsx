import {
  FormStyled,
  Label,
  BtnsWrapper,
  Input,
  InputBtns,
  InputCustom,
} from './Form.styled';

export const Form = ({ setBill, setPerc, setPeople }) => {
  const tipOptions = [5, 10, 15, 25, 50];

  function handlePeopleInputChange(value) {
    if (value === 0) {
      return;
    }
    setPeople(value);
  }

  return (
    <FormStyled>
      <Label>
        Bill
        <Input
          type="text"
          name="bill"
          onChange={e => setBill(Number(e.target.value))}
        ></Input>
      </Label>
      <Label>
        {' '}
        Select tip %
        <BtnsWrapper>
          {tipOptions.map(item => {
            return (
              <InputBtns
                type="button"
                value={item + '%'}
                key={item}
                onClick={() => setPerc(item)}
              ></InputBtns>
            );
          })}
          <InputCustom
            type="text"
            placeholder="Custom"
            onChange={e => setPerc(Number(e.target.value))}
          ></InputCustom>
        </BtnsWrapper>
      </Label>
      <Label>
        Number of people
        <Input
          type="number"
          onChange={e => handlePeopleInputChange(Number(e.target.value))}
        ></Input>
      </Label>
    </FormStyled>
  );
};
