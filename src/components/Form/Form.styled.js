import styled from 'styled-components';
import { Input, InputLeftElement } from '@chakra-ui/react';
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;

  color: #5e7a7d;
`;

export const InputIcons = styled(InputLeftElement)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(17px, 24px);
`;

export const InputStyled = styled(Input)`
  position: relative;
  margin-top: 6px;
  width: 100%;
  height: 48px;
  background: #f3f9fa;
  border-radius: 5px;
  font-family: inherit;
  font-size: 24px;
  line-height: 1.5;
  color: #00474b;
  cursor: pointer;
  border: transparent;
  text-align: right;
  padding-right: 16px;
  &:focus {
    outline: none;
    border: 2px solid #26c2ae;
  }
`;

export const InputBtns = styled.input`
  display: block;
  width: 147px;
  @media screen and (min-width: 768px) {
    width: 117px;
  }
  height: 48px;
  background-color: #00474b;
  color: white;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  border-radius: 5px;
  border: transparent;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  width: 311px;
  @media screen and (min-width: 768px) {
    width: 379px;
  }
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const InputCustom = styled.input`
  display: block;
  width: 147px;
  @media screen and (min-width: 768px) {
    width: 117px;
  }
  height: 48px;
  box-sizing: border-box;
  background: #f3f9fa;
  border-radius: 5px;
  padding: 17px;
  font-family: inherit;
  font-size: 24px;
  line-height: 1.5;
  color: #00474b;
  cursor: pointer;
  outline: none;
  border: transparent;

  &:focus {
    outline: none;
    border: 2px solid #26c2ae;
  }

  &::placeholder {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 700;
    text-align: right;

    color: #547878;
  }
`;
