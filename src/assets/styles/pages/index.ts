import styled from 'styled-components';

export const Container = styled.main`
  header {
    margin-top: 3.4rem;
    margin-bottom: 4.2rem;
  }
  section {
    .container__list--tasks {
      position: relative;
    }
    h1 {
      font-size: 30px;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fonts.montserrat};
      margin-bottom: 1.8rem;
      width: 100%;
    }
  }

  @media screen and (min-width: 1163px) {
    margin-left: 11.8rem;
  }
`;

export const InputSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  max-width: 59.9rem;

  img {
    margin-right: 1.2rem;
  }
  input {
    height: 50px;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: 300;

    &::-webkit-search-cancel-button {
      appearance: none;
    }
    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
