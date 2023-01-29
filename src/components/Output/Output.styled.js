import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #00474b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  color: white;
  padding: 24px;
  @media screen and (min-width: 768px) {
    margin-left: 48px;
    margin-top: 0;
    padding: 40px;
    width: 100%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 9px;
  text-align: center;
  width: 100%;
  max-width: 333px;
  height: 48px;
  background-color: #26c2ae;
  border-radius: 5px;
  border: transparent;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  color: #00474b;
  text-transform: uppercase;
  margin-top: auto;
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
  &:focus,
  &:hover {
    background-color: #9fe8df;
    color: #00474b;
  }
  &:disabled {
    background-color: #0d686d;
    color: #00474b;
    cursor: auto;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  align-items: space-between;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-size: 13px;
  line-height: 1.46;

  color: #7f9d9f;
`;

export const WrapForText = styled.p`
  display: flex;
  flex-direction: column;
`;

export const Numbers = styled.span`
  font-size: 32px;
  line-height: 1.47;
  letter-spacing: -1px;

  color: #26c2ae;
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
`;
