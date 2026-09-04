import React, {useEffect, useRef} from 'react';
import OriginalMermaid from '@theme-original/Mermaid';
import type MermaidType from '@theme/Mermaid';
import type {default as SvgPanZoomFn} from 'svg-pan-zoom';
import styles from './styles.module.css';

type Props = React.ComponentProps<typeof MermaidType>;

// Docusaurus's Mermaid component renders the diagram asynchronously via
// dangerouslySetInnerHTML, so the <svg> isn't present on first mount — a
// MutationObserver is what catches it appearing.
//
// svg-pan-zoom touches `window` at module-eval time, so it can't be a
// static top-level import: this file is pulled in unconditionally by
// theme-classic's shared MDXComponents (for the `mermaid` fence mapping)
// on every doc page during SSR, and a static import would crash the whole
// site's build the moment Node evaluates it. The dynamic import() keeps
// it out of the server bundle's eval path entirely.
export default function Mermaid(props: Props): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    let panZoomInstance: SvgPanZoom.Instance | undefined;
    let cancelled = false;

    const setup = async () => {
      const {default: svgPanZoom}: {default: typeof SvgPanZoomFn} =
        await import('svg-pan-zoom');
      if (cancelled) {
        return;
      }

      const setupPanZoom = () => {
        const svg = container.querySelector<SVGSVGElement>('svg');
        if (!svg || svg.dataset.panzoomInit) {
          return;
        }
        svg.dataset.panzoomInit = 'true';
        svg.style.maxWidth = '100%';
        svg.style.height = '100%';
        panZoomInstance = svgPanZoom(svg, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          minZoom: 0.5,
          maxZoom: 10,
        });
      };

      setupPanZoom();
      const observer = new MutationObserver(setupPanZoom);
      observer.observe(container, {childList: true, subtree: true});
      cleanup = () => observer.disconnect();
    };

    let cleanup: (() => void) | undefined;
    void setup();

    return () => {
      cancelled = true;
      cleanup?.();
      panZoomInstance?.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.panZoomContainer}>
      <OriginalMermaid {...props} />
    </div>
  );
}
