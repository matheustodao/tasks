import {
  useRef, useEffect, useState, ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface Props {
  children: ReactNode,
  selector: string,
  mountedValue: false | true,
  // eslint-disable-next-line no-unused-vars
  onIsOpen: (value: true | false) => void,
}

export default function Portal({
  children, selector, mountedValue, onIsOpen,
}: Props) {
  const ref = useRef<HTMLDivElement>();
  const refBody = useRef<any>();
  const [mounted, setMounted] = useState<true | false>(false);
  const { screenWidth } = useWindowDimensions();

  function handleClickModalOutside(e: MouseEvent) {
    if (e.target !== e.currentTarget) {
      setMounted(true);
      onIsOpen(true);
    } else {
      setMounted(false);
      onIsOpen(false);
      refBody.current.style.overflowY = 'scroll';
    }
  }

  function mountMenuToMobileDevice() {
    ref.current = document.querySelector(selector) as HTMLDivElement;
    refBody.current.style.overflowY = 'hidden';
    ref.current.addEventListener('click', (e) => handleClickModalOutside(e));
    setMounted(!mountedValue);
  }

  useEffect(() => {
    ref.current = document.querySelector(selector) as HTMLDivElement;
    refBody.current = document.querySelector('body');

    if (screenWidth <= 375) {
      // When screen width is mobile device will mount menu with yours requeriments
      mountMenuToMobileDevice();
    }

    if (screenWidth > 375) {
      // If menu was open in mobile device will close and active scroll
      onIsOpen(false);
      refBody.current.style.overflowY = 'scroll';
    }

    setMounted(true);

    return () => (
      ref.current?.removeEventListener('click', (e) => handleClickModalOutside(e))
    );
  }, [selector, screenWidth]);

  return (
    mounted
      ? createPortal(
        children,
        ref.current as HTMLDivElement,
      )
      : null
  );
}
