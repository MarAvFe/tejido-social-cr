import React, {useEffect, useRef} from 'react';
import OriginalMermaid from '@theme-original/Mermaid';
import type MermaidType from '@theme/Mermaid';
import svgPanZoom from 'svg-pan-zoom';
import styles from './styles.module.css';

type Props = React.ComponentProps<typeof MermaidType>;

// Docusaurus's Mermaid component renders the diagram asynchronously via
// dangerouslySetInnerHTML, so the <svg> isn't present on first mount — a
// MutationObserver is what catches it appearing.
export default function Mermaid(props: Props): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    let panZoomInstance: SvgPanZoom.Instance | undefined;

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

    return () => {
      observer.disconnect();
      panZoomInstance?.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.panZoomContainer}>
      <OriginalMermaid {...props} />
    </div>
  );
}
