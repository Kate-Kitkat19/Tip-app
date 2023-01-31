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
import { ErrorMessage } from './ErrorMessage';

export const Form = forwardRef(function Form(props, ref) {
  const { setBillValue, setPeopleValue, setCustomTip, error } = props;

  function handleBtnClick(e) {
    setCustomTip(e.target.value);
  }

  const buttons = [
    <InputBtns type="button" key={5} onClick={e => handleBtnClick(e)} value={5}>
      {5 + '%'}
    </InputBtns>,
    <InputBtns
      type="button"
      key={10}
      onClick={e => handleBtnClick(e)}
      value={10}
    >
      {10 + '%'}
    </InputBtns>,

    <InputBtns
      type="button"
      key={15}
      onClick={e => handleBtnClick(e)}
      value={15}
    >
      {15 + '%'}
    </InputBtns>,

    <InputBtns
      type="button"
      key={25}
      onClick={e => handleBtnClick(e)}
      value={25}
    >
      {25 + '%'}
    </InputBtns>,

    <InputBtns
      type="button"
      key={50}
      onClick={e => handleBtnClick(e)}
      value={50}
    >
      {50 + '%'}
    </InputBtns>,
  ];

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
        {error === true && <ErrorMessage />}
        <InputGroup>
          <InputIcons pointerEvents="none" children={<MyIcon />} />
          <InputStyled
            type="text"
            onChange={e => setPeopleValue(e.target.value)}
            placeholder="0"
            borderColor={error === true && '#E17052'}
          ></InputStyled>
        </InputGroup>
      </Label>
    </FormStyled>
  );
});
