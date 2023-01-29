import styled from 'styled-components';

export const Container = styled.div`
  background-color: #c5e4e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 20px;

  scrollbar-color: #c5e4e7;

  @media screen and (min-width: 769px) {
    height: 100vh;
    width: 100vw;
    position: fixed;
  }
`;

export const AppAtyled = styled.div`
  background-color: white;
  padding: 24px;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  max-width: 520px;
  width: 90%;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    gap: 15px;
    padding: 32px;
    max-width: 690px;
  }

  @media screen and (min-width: 1024px) {
    width: 75%;
    max-width: 920px;
  }
`;
