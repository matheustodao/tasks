import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    border-radius: ${({ theme }) => theme.borderRadius[10]};
    font-family: ${({ theme }) => theme.fonts.roboto};
    outline: none;
  }

  body {
    font-size: 1rem;
    color: #252525;
    background: ${({ theme }) => theme.colors.background};
    word-break: break-all;
    @media screen and (min-width: 376px){
      display: grid;
      grid-template-columns: 19.2rem auto;

      > #portal #menu {
        grid-area: 1;
        width: 19.2rem;
        height: 100vh;
        @media screen and (min-width: 376px){
          height: 100%;
        }
      }

      > #content {
        grid-area: 2;
        width: 100%;
      }
    }
  }

  button, input, textarea {
    font-family: ${({ theme }) => theme.fonts.roboto};
    border: none;
  }

  #portal, #modal-task {
    z-index: 1000;
  }

  #modal-task, #modal-task-edit {
    display: none;
    position: absolute;
    left: 0;
  }
`;
