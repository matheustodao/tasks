import { ReactNode } from 'react';
import Menu from '../Menu';
import { Container } from './styles';

interface Props {
  children: ReactNode,
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Menu />
      <div id="content">
        {children}
      </div>
    </Container>
  );
}
