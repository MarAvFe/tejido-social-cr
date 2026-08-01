import React, {type ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

type Status = 'idle' | 'playing' | 'paused';

// El motor de voz del navegador (Web Speech API) corta los enunciados
// largos en varios navegadores. Se parte el texto en trozos por oración
// y se encolan por separado.
const MAX_CHUNK = 200;

function chunkText(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]*\s*/g) ?? [text];
  const chunks: string[] = [];
  let current = '';
  for (const sentence of sentences) {
    if (current.length + sentence.length > MAX_CHUNK && current) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current.trim()) {
    chunks.push(current.trim());
  }
  return chunks;
}

/**
 * Extrae el texto legible del artículo, saltando elementos que no aportan
 * al escuchar: bloques de código, tablas de contenido y la barra misma.
 */
function extractArticleText(root: HTMLElement): string {
  const clone = root.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll('pre, code, .table-of-contents, [data-a11y-skip]')
    .forEach((node) => node.remove());
  return (clone.textContent ?? '').replace(/\s+/g, ' ').trim();
}

export default function ReadAloud(): ReactNode {
  const [status, setStatus] = useState<Status>('idle');
  const [supported, setSupported] = useState(false);
  const stoppedRef = useRef(false);

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
  }, []);

  // Detener la lectura al desmontar o al navegar a otro artículo: si no,
  // la voz sigue leyendo la página anterior.
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const pickSpanishVoice = useCallback(() => {
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((v) => v.lang === 'es-CR') ??
      voices.find((v) => v.lang.startsWith('es-')) ??
      voices.find((v) => v.lang.startsWith('es')) ??
      null
    );
  }, []);

  const start = useCallback(() => {
    const article =
      document.querySelector<HTMLElement>('.markdown') ??
      document.querySelector<HTMLElement>('main');
    if (!article) {
      return;
    }

    const text = extractArticleText(article);
    if (!text) {
      return;
    }

    stoppedRef.current = false;
    window.speechSynthesis.cancel();

    const voice = pickSpanishVoice();
    const chunks = chunkText(text);

    chunks.forEach((chunk, index) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = voice?.lang ?? 'es-ES';
      if (voice) {
        utterance.voice = voice;
      }
      utterance.rate = 0.95;
      if (index === chunks.length - 1) {
        utterance.onend = () => {
          if (!stoppedRef.current) {
            setStatus('idle');
          }
        };
      }
      utterance.onerror = () => setStatus('idle');
      window.speechSynthesis.speak(utterance);
    });

    setStatus('playing');
  }, [pickSpanishVoice]);

  const handleToggle = useCallback(() => {
    if (status === 'idle') {
      // getVoices() puede venir vacío en la primera llamada; en ese caso se
      // espera al evento voiceschanged antes de arrancar.
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', start, {
          once: true,
        });
        // Fallback: si el evento nunca llega, arrancar igual con la voz
        // por defecto del sistema.
        window.setTimeout(() => {
          if (window.speechSynthesis.speaking === false) {
            start();
          }
        }, 500);
        return;
      }
      start();
    } else if (status === 'playing') {
      window.speechSynthesis.pause();
      setStatus('paused');
    } else {
      window.speechSynthesis.resume();
      setStatus('playing');
    }
  }, [status, start]);

  const handleStop = useCallback(() => {
    stoppedRef.current = true;
    window.speechSynthesis.cancel();
    setStatus('idle');
  }, []);

  if (!supported) {
    return null;
  }

  const label =
    status === 'playing'
      ? 'Pausar la lectura en voz alta'
      : status === 'paused'
        ? 'Reanudar la lectura en voz alta'
        : 'Escuchar este artículo en voz alta';

  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={handleToggle}
        aria-label={label}>
        <span aria-hidden="true">
          {status === 'playing' ? '⏸' : status === 'paused' ? '▶' : '🔊'}
        </span>
        <span>
          {status === 'playing'
            ? 'Pausar'
            : status === 'paused'
              ? 'Reanudar'
              : 'Escuchar'}
        </span>
      </button>
      {status !== 'idle' && (
        <button
          type="button"
          className={styles.button}
          onClick={handleStop}
          aria-label="Detener la lectura en voz alta">
          <span aria-hidden="true">⏹</span>
          <span>Detener</span>
        </button>
      )}
      {/* Anuncio para lectores de pantalla: el estado del botón cambia
          visualmente, y esto lo hace perceptible también sin vista. */}
      <span className="sr-only" role="status" aria-live="polite">
        {status === 'playing'
          ? 'Leyendo el artículo en voz alta.'
          : status === 'paused'
            ? 'Lectura pausada.'
            : ''}
      </span>
    </>
  );
}
