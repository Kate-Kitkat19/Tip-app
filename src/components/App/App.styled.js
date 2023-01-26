import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c5e4e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
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

  margin-top: 60px;
  width: 90%;
  @media screen and (min-width: 1200px) {
    width: 920px;
  }
`;
