import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 31.5rem;
  max-height: 36.7rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 2.5rem;

  h3 {
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2.4rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.6rem;

  button {
    color: #386DB3;
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: none;
    &[disabled] {
      cursor: not-allowed;
      color: #737373;
    }
    + button {
      margin-left: 1.4rem;
    }
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.main};
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
  padding: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  cursor: pointer;
  @media screen and (min-width: 950px) {
    right: 20%;
  }
`;
