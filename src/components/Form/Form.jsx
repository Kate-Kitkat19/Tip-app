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

  const { setBillValue, setPeopleValue, setCustomTip } = props;

  const buttons = tipOptions.map(item => {
    return (
      <InputBtns
        type="button"
        key={item}
        onClick={e => handleBtnClick(e)}
        value={item}
        active={false}
      >
        {item + '%'}
      </InputBtns>
    );
  });

  function handlePeopleInputChange(value) {
    if (value === 0) {
      return;
    }
    setPeopleValue(value);
  }

  function handleBtnClick(e) {
    const currentBtn = e.target;

    setCustomTip(currentBtn.value);
    buttons.forEach(button => {
      if (button.props.value === Number(currentBtn.value)) {
        console.log('It`s this button!!!', currentBtn.value);
        // button.style.backgroundColor = '#26C2AE';
        // button.style.color = '#00474B';
        console.log(button.type.componentStyle);
      } else {
        console.log('It`s different button :( ');
        // button.style.color = '#fff';
        // button.style.backgroundColor = '#00474B';
      }
    });
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
            onChange={e => setBillValue(e.target.value)}
            placeholder="0"
          ></InputStyled>
        </InputGroup>
      </Label>
      <Label>
        {' '}
        Select tip %
        <BtnsWrapper>
          {buttons}
          <InputCustom
            type="text"
            placeholder="Custom"
            onChange={e => handleBtnClick(e)}
          ></InputCustom>
        </BtnsWrapper>
      </Label>
      <Label>
        Number of people
        <InputGroup>
          <InputIcons pointerEvents="none" children={<MyIcon />} />
          <InputStyled
            type="text"
            onChange={e => handlePeopleInputChange(e.target.value)}
            placeholder="0"
          ></InputStyled>
        </InputGroup>
      </Label>
    </FormStyled>
  );
});
