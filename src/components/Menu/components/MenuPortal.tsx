import {
  useRef, useEffect, useState, ReactNode, MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { OverlayMenu } from '../../Overlay';

interface Props {
  children: ReactNode,
  modalVisible: boolean,
  setModalVisible: Function,
}

// How menu is different requirements of another modals
// It was created own MenuPortal provider

//* Its basically the same logic of PortalProvider,
//* but here verify if screen is mobile devide
//* and has overlay style different */

export default function MenuPortal({
  children, modalVisible, setModalVisible,
}: Props) {
  const ref = useRef<HTMLDivElement>();
  const refBody = useRef<any>();
  const [mounted, setMounted] = useState<true | false>(false);
  const { screenWidth } = useWindowDimensions();

  function handleClickModalOutside(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
      setMounted(false);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    ref.current = document.querySelector('#portal') as HTMLDivElement;
    refBody.current = document.querySelector('body') as HTMLBodyElement;

    ref.current.style.display = 'flex';
    refBody.current.style.overflowY = 'hidden';

    if (screenWidth > 375) {
      // If menu was open in mobile device will close and active scroll
      refBody.current.style.overflowY = 'scroll';
      setModalVisible(false);
    }

    setMounted(true);
    return () => {
      refBody.current.style.overflowY = 'scroll';
    };
  }, [modalVisible, screenWidth]);

  return (
    mounted
      ? createPortal(
        <OverlayMenu isVisible={modalVisible} onClick={(e) => handleClickModalOutside(e)}>
          {children}
        </OverlayMenu>,
        ref.current as HTMLDivElement,
      )
      : null
  );
}
