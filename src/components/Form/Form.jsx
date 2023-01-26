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
import { forwardRef } from 'react';

export const Form = forwardRef(function Form(props, ref) {
  const tipOptions = [5, 10, 15, 25, 50];
  const { setBill, setPeople, setPerc } = props;

  let currentPercBtn = null;
  function handlePeopleInputChange(value) {
    if (value === 0) {
      return;
    }
    setPeople(value);
  }

  function handleBtnClick(e) {
    const currentBtn = e.target;
    currentPercBtn = currentBtn;
    setPerc(currentBtn.value.slice(0, -1));

    // if (currentPercBtn === currentBtn) {
    //   console.log('currentBtn if equal', currentBtn);
    //   currentBtn.style.backgroundColor = '#00474b';
    // } else {
    //   console.log('currentPercBtn if different', currentPercBtn);
    //   currentPercBtn.style.backgroundColor = '#00474b';
    //   console.log('currentBtn if diff', currentBtn);
    //   currentBtn.style.backgroundColor = 'red';

    // }
  }

  return (
    <FormStyled ref={ref}>
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
                onClick={e => handleBtnClick(e)}
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
            type="text"
            onChange={e => handlePeopleInputChange(Number(e.target.value))}
            placeholder="0"
          ></InputStyled>
        </InputGroup>
      </Label>
    </FormStyled>
  );
});
