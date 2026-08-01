import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useTextSize, type TextSize} from './TextSizeContext';
import ReadAloud from './ReadAloud';
import styles from './styles.module.css';

const SIZES: {value: TextSize; label: string; aria: string; className: string}[] =
  [
    {value: 'base', label: 'A', aria: 'Tamaño de texto normal', className: styles.sizeBase},
    {value: 'large', label: 'A', aria: 'Tamaño de texto grande', className: styles.sizeLarge},
    {
      value: 'xlarge',
      label: 'A',
      aria: 'Tamaño de texto muy grande',
      className: styles.sizeXlarge,
    },
  ];

function ThemeToggleButton(): ReactNode {
  const {colorMode, setColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
      aria-label={
        isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
      }>
      <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
      <span>{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
    </button>
  );
}

function TextSizeButtons(): ReactNode {
  const {size, setSize} = useTextSize();
  return (
    <div
      className={styles.sizeGroup}
      role="group"
      aria-label="Tamaño del texto">
      {SIZES.map((option) => (
        <button
          key={option.value}
          type="button"
          className={clsx(
            styles.button,
            styles.sizeButton,
            option.className,
            size === option.value && styles.buttonActive,
          )}
          aria-label={option.aria}
          aria-pressed={size === option.value}
          onClick={() => setSize(option.value)}>
          <span aria-hidden="true">{option.label}</span>
        </button>
      ))}
    </div>
  );
}

/**
 * Barra de accesibilidad del artículo: tamaño de texto, modo claro/oscuro
 * y lectura en voz alta. Se muestra en el flujo de la página (no en el
 * navbar) para que siga visible en móvil, donde el navbar se colapsa.
 */
export default function A11yToolbar(): ReactNode {
  return (
    <div
      className={styles.toolbar}
      data-a11y-skip
      role="region"
      aria-label="Herramientas de accesibilidad">
      <span className={styles.label} aria-hidden="true">
        Accesibilidad:
      </span>
      <TextSizeButtons />
      <span className={styles.spacer} />
      {/* useColorMode y speechSynthesis solo existen en el cliente. */}
      <BrowserOnly>{() => <ThemeToggleButton />}</BrowserOnly>
      <BrowserOnly>{() => <ReadAloud />}</BrowserOnly>
    </div>
  );
}
