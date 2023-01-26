import {
  FormStyled,
  Label,
  BtnsWrapper,
  InputBtns,
  InputCustom,
  InputStyled,
  InputIcons,
} from './Form.styled';
import { InputGroup } from '@chakra-ui/react';

import { MyIcon } from './PersonIcon';
import { DollarIcon } from './DollarIcon';

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
        <InputGroup>
          <InputIcons pointerEvents="none" children={<DollarIcon />} />
          <InputStyled
            type="text"
            name="bill"
            onChange={e => setBill(Number(e.target.value))}
            placeholder="0"
          ></InputStyled>
        </InputGroup>
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
        <InputGroup>
          <InputIcons pointerEvents="none" children={<MyIcon />} />
          <InputStyled
            type="number"
            onChange={e => handlePeopleInputChange(Number(e.target.value))}
            placeholder="0"
          ></InputStyled>
        </InputGroup>
      </Label>
    </FormStyled>
  );
};
