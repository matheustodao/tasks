import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  border: 1px solid #9e9e9e;
  background: ${({ theme }) => theme.colors.background};
  & + & {
    margin-top: 12px;
  }
  label {
    position: absolute;
    background: none;
    color: #666666;
    top: -6px;
    left: 8px;
    background: ${({ theme }) => theme.colors.background};
    padding: 0 .5rem;
    font-size: 12px;
  }

  input, textarea {
    width: 100%;
    height: 5.6rem;
    padding: 0 15px;
    background: none;
    border-radius: none;
    border: none;
    appearance: none;
    &::placeholder {
      color: #BCBCBC;
    }
  }

  textarea {
    resize: none;
    max-height: 7.3rem;
    margin-top: 12px;
    padding-bottom: 16px;
  }
`;
