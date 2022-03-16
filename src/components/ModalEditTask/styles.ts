import styled, { css } from 'styled-components';

type TSituation = boolean;

interface IPropsStatus {
  isPending: TSituation,
}

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

export const Status = styled.div`
  background: #E5E5E5;
  border-radius: ${({ theme }) => theme.borderRadius['5']};
  padding: .6rem;
  margin-top: 1.9rem;

  #pending, #done {
    padding: .6rem 2.4rem;
    cursor: pointer;
  }
    ${({ isPending }: IPropsStatus) => isPending && css`
      #pending {
        background: #FFF;
        color: #212121 ;
      }

      #done {
        background: none;
        color: #737373;
      }
    `}

    ${({ isPending }: IPropsStatus) => !isPending && css`
      #pending {
        background: none;
        color: #737373;
      }

      #done {
        background: none;
        color: #737373;
        background: #FFF;
        color: #212121 ;
      }
  `}
`;
