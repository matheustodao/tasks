import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.main};
  color: #FFFFFF;
  padding: 1.8rem 2.4rem;
  padding-bottom: 2.4rem;
  max-width: 58.3rem;

  & + & {
    margin-top: 2.1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  .info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      text-transform: capitalize;
      word-wrap: wrap;
      word-break: break-all;
    }

    p {
      margin-top: 4px;
      word-wrap: wrap;
      word-break: break-all;
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
`;

export const Action = styled.div`
  position: relative;
  justify-self: flex-start;

  button {
    background: none;
    cursor: pointer;
  }
`;

export const DropDownOverlay = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius[5]};
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  right: 0;
  width: 14.2rem;
  background: ${({ theme }) => theme.colors.background};
  display: ${({ isVisible }: { isVisible: boolean }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1.1rem 1rem;
  z-index: 100;
  button {
    color: #999999;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: 500;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    + button {
      margin-top: 1.6rem;
    }
  }
`;

export const Status = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 4px;
  color: #000000;
  margin-top: 2.6rem;
  font-weight: 500;
  font-size: 14px;
  img {
    margin-right: .8rem;
  }
  max-width: 12rem;
  min-height: 3.2rem;
`;
