import React, {type ReactNode} from 'react';
import {useAcronymMode} from './AcronymModeContext';
import styles from './styles.module.css';

type AcronymProps = {
  short: string;
  full: string;
};

export default function Acronym({short, full}: AcronymProps): ReactNode {
  const {mode} = useAcronymMode();

  if (mode === 'expanded') {
    return <span className={styles.expanded}>{full}</span>;
  }

  return (
    <abbr className={styles.abbr} title={full}>
      {short}
    </abbr>
  );
}
