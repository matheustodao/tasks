import styled from 'styled-components';

export const Overlay = styled.div`
  display: ${({ isVisible }: { isVisible: boolean }) => (isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 0;
  z-index: 1500;

`;

export const OverlayMenu = styled(Overlay)`
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (min-width: 376px) {
    display: flex;
    max-width: 19.2rem;
    background: none;
    backdrop-filter: none;
  }
`;
