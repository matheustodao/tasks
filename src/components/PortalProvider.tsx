import {
  useRef, useEffect, useState, ReactNode, MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Overlay';

interface Props {
  children: ReactNode,
  selector: string,
  modalVisible: boolean,
  setModalVisible: Function,
}

export default function PortalProvider({
  children, selector, modalVisible, setModalVisible,
}: Props) {
  const ref = useRef<HTMLDivElement>();
  const refBody = useRef<any>();
  const [mounted, setMounted] = useState<true | false>(false);

  function handleClickModalOutside(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
      setMounted(false);
      ref.current = document.querySelector(selector) as HTMLDivElement;
      ref.current.style.display = 'none';
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    ref.current = document.querySelector(selector) as HTMLDivElement;
    refBody.current = document.querySelector('body') as HTMLBodyElement;

    ref.current.style.display = 'flex';
    refBody.current.style.overflowY = 'hidden';

    setMounted(true);

    return () => {
      ref.current = document.querySelector(selector) as HTMLDivElement;
      ref.current.style.display = 'none';
      refBody.current.style.overflowY = 'scroll';
    };
  }, [selector, modalVisible]);

  return (
    mounted
      ? createPortal(
        <Overlay isVisible={modalVisible} onClick={(e) => handleClickModalOutside(e)}>
          {children}
        </Overlay>,
        ref.current as HTMLDivElement,
      )
      : null
  );
}
