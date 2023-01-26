import {
  Wrapper,
  Button,
  Line,
  Span,
  WrapForText,
  Numbers,
} from './Output.styled';

export const Output = ({ tipPerPerson, totalPerPerson, resetForm }) => {

  return (
    <Wrapper>
      <Line>
        <WrapForText>
          <span>Tip amount</span>
          <Span>/ person</Span>
        </WrapForText>
        <Numbers> $ {tipPerPerson ?? '0.00'} </Numbers>
      </Line>
      <Line>
        <WrapForText>
          <span>Total</span>
          <Span>/ person</Span>
        </WrapForText>
        <Numbers> $ {totalPerPerson ?? '0.00'} </Numbers>
      </Line>
      <Button type="reset" onClick={resetForm}>
        Reset
      </Button>
    </Wrapper>
  );
};
