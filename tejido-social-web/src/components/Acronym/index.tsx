import React, {type ReactNode, useEffect, useRef, useState} from 'react';
import {useAcronymMode} from './AcronymModeContext';
import styles from './styles.module.css';

type AcronymProps = {
  short: string;
  full: string;
};

export default function Acronym({short, full}: AcronymProps): ReactNode {
  const {mode} = useAcronymMode();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    function handleOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleOutside);
    return () => document.removeEventListener('click', handleOutside);
  }, [open]);

  if (mode === 'expanded') {
    return <span className={styles.expanded}>{full}</span>;
  }

  // El title nativo sigue dando el tooltip de hover en escritorio; el
  // popover cubre el mismo caso en móvil, donde hover no existe y un tap
  // sobre <abbr title> no muestra nada.
  return (
    <span className={styles.popoverWrapper} ref={ref}>
      <abbr
        className={styles.abbr}
        title={full}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}>
        {short}
      </abbr>
      {open && <span className={styles.popoverBubble}>{full}</span>}
    </span>
  );
}
