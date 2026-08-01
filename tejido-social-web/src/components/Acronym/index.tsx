import React, {type ReactNode, useEffect, useId, useRef, useState} from 'react';
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
  const bubbleId = useId();

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
  //
  // El <abbr> conserva su rol nativo de abreviatura (antes se le ponía
  // role="button", que lo pisaba: el lector de pantalla anunciaba "botón"
  // y perdía la expansión del title). El control queda en un <button>
  // real que lo envuelve, así el teclado funciona sin onKeyDown manual.
  return (
    <span className={styles.popoverWrapper} ref={ref}>
      <button
        type="button"
        className={styles.abbrTrigger}
        aria-expanded={open}
        aria-controls={open ? bubbleId : undefined}
        aria-label={`${short}: ${full}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && open) {
            setOpen(false);
          }
        }}>
        <abbr className={styles.abbr} title={full}>
          {short}
        </abbr>
      </button>
      {open && (
        <span className={styles.popoverBubble} id={bubbleId} role="tooltip">
          {full}
        </span>
      )}
    </span>
  );
}
