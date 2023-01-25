import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c5e4e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppAtyled = styled.div`
  background-color: white;
  padding: 32px;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
  }

  margin-bottom: 87px;
  width: 90%;
  @media screen and (min-width: 1200px) {
    width: 920px;
  }
  
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  color: #3d6666;
  width: 86.66px;
  word-break: break-all;
  margin-bottom: 80px;
`;
