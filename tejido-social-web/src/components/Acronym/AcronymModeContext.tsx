import React, {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const STORAGE_KEY = 'tejido-social:acronym-mode';

type AcronymMode = 'abbr' | 'expanded';

type AcronymModeContextValue = {
  mode: AcronymMode;
  setMode: (mode: AcronymMode) => void;
};

const AcronymModeContext = createContext<AcronymModeContextValue | null>(null);

// Reutiliza el mecanismo de persistencia de Docusaurus (useColorMode ya
// resuelve SSR vs. cliente); acá solo necesitamos el mismo patrón de
// localStorage, sin acoplarnos a su API interna.
function readStoredMode(): AcronymMode {
  if (typeof window === 'undefined') {
    return 'abbr';
  }
  return window.localStorage.getItem(STORAGE_KEY) === 'expanded'
    ? 'expanded'
    : 'abbr';
}

export function AcronymModeProvider({children}: {children: ReactNode}) {
  const [mode, setModeState] = useState<AcronymMode>('abbr');

  useEffect(() => {
    setModeState(readStoredMode());
  }, []);

  const setMode = useCallback((next: AcronymMode) => {
    setModeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <AcronymModeContext.Provider value={{mode, setMode}}>
      {children}
    </AcronymModeContext.Provider>
  );
}

export function useAcronymMode(): AcronymModeContextValue {
  const ctx = useContext(AcronymModeContext);
  if (!ctx) {
    // Fuera del provider (p. ej. en un test aislado): comportamiento por
    // defecto, sin persistencia.
    return {mode: 'abbr', setMode: () => {}};
  }
  return ctx;
}
