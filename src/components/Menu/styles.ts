import styled, { DefaultTheme } from 'styled-components';

const styleFont = `
  font-weight: 500;
  font-size: 1.4rem;
  color: #FFFF;
`;

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.main};
  color: #FFFFFF;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 0;
  width: 19.2rem;
  height: 100vh;
  padding: 3.4rem 2.4rem;
  > div {
    border-radius: 0;
  }
`;

export const WrapperButtonMenu = styled.div`
  button {
    background: none;
    width: 4.2rem;
    height: 4.2rem;
 }

`;

export const InformationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 1.3rem;

  strong, small {
    ${styleFont};
  }

  small {
    font-weight: 300;
    margin-top: 3px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #FFFFFF;
  margin: 2.2rem 0;
`;

export const WrapperRoutes = styled.div`
  li {
    list-style: none;
    width: 100%;
    + li {
      margin-top: 1.4rem;
    }
  }
`;

export const Route = styled.li`
  width: 100%;
  list-style: none;
  width: 100%;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius['10']};
  text-transform: capitalize;

  background: ${({ active, theme }: { active: boolean, theme: DefaultTheme }) => (
    active ? theme.colors.dark : 'none'
  )};

  + li {
    margin-top: 1.4rem;
  }

  a {
    ${styleFont};
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 2.4rem;
  }
`;
