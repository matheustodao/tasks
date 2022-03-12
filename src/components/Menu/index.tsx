import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import Portal from '../Portal';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { routesMenu } from './routesMenu';

import {
  Container, InformationWrapper, Information, Divider, WrapperRoutes, Route, WrapperButtonMenu,
} from './styles';

export default function Menu() {
  const [isOpen, setIsOpen] = useState<true | false>(false);
  const { screenWidth } = useWindowDimensions();
  const { asPath: currentPath } = useRouter();

  if (!isOpen && screenWidth <= 375) {
    return (
      <WrapperButtonMenu>
        <button type="button" onClick={() => setIsOpen((state) => !state)}>
          <Image
            src="/images/icons/menu.svg"
            width={42}
            height={42}
            alt="open menu"
          />
        </button>
      </WrapperButtonMenu>
    );
  }

  return (
    <Portal
      selector="#portal"
      mountedValue={isOpen}
      onIsOpen={(value: boolean) => setIsOpen(value)}
    >
      <Container>
        <InformationWrapper>
          <Image
            src="/images/icons/avatar.svg"
            width={47}
            height={47}
            alt="Avatar icon"
          />
          <Information>
            <strong>Nome</strong>
            <small>Função</small>
          </Information>
        </InformationWrapper>

        <Divider />

        <WrapperRoutes>
          <ul>
            {routesMenu.map(
              (route) => (
                <Route key={route.label} active={currentPath === route.to}>
                  <Link href={route.to}>
                    <a>
                      <Image
                        src={route.iconSource}
                        width={24}
                        height={24}
                        alt={route.iconAlt}
                      />
                      {route.label}
                    </a>
                  </Link>
                </Route>
              ),
            )}
          </ul>
        </WrapperRoutes>
      </Container>
    </Portal>
  );
}
