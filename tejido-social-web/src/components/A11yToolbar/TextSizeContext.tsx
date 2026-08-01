import React, {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type TextSize = 'base' | 'large' | 'xlarge';

const STORAGE_KEY = 'tejido-text-size';
const ORDER: TextSize[] = ['base', 'large', 'xlarge'];

type TextSizeContextValue = {
  size: TextSize;
  setSize: (size: TextSize) => void;
  cycle: () => void;
};

const TextSizeContext = createContext<TextSizeContextValue>({
  size: 'base',
  setSize: () => {},
  cycle: () => {},
});

export function TextSizeProvider({children}: {children: ReactNode}): ReactNode {
  const [size, setSizeState] = useState<TextSize>('base');

  // Se lee en el efecto y no en el useState inicial: durante el SSR no hay
  // localStorage, y leerlo en el render inicial del cliente provocaría un
  // desajuste de hidratación contra el HTML generado.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as TextSize | null;
    if (stored && ORDER.includes(stored)) {
      setSizeState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.textSize = size;
  }, [size]);

  const setSize = useCallback((next: TextSize) => {
    setSizeState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const cycle = useCallback(() => {
    setSizeState((current) => {
      const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <TextSizeContext.Provider value={{size, setSize, cycle}}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize(): TextSizeContextValue {
  return useContext(TextSizeContext);
}
