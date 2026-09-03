import type {ReactNode} from 'react';
import clsx from 'clsx';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';

import styles from './styles.module.css';

/**
 * Docusaurus's stock toggle ties two separate behaviors to one config flag
 * (colorMode.respectPrefersColorScheme): whether a first-time visitor's
 * initial theme follows their OS preference, AND whether the toggle's
 * click-cycle includes a 3rd "system" state (light -> dark -> system ->
 * light...). We want the first but not the second: a first visit should
 * still follow the OS, but the button itself should only ever show and
 * cycle between sun and moon — never a distinct 3rd icon, and never a way
 * to click back to "system" once a person has made a choice.
 *
 * So this reads the *effective* color (`colorMode`, always 'light' or
 * 'dark', already resolved from system preference on first load) instead
 * of the *choice* (`colorModeChoice`, which is null until an explicit
 * pick), and always calls setColorMode with an explicit value.
 */
export default function NavbarColorModeToggle({
  className,
}: {
  className?: string;
}): ReactNode {
  const navbarStyle = useThemeConfig().navbar.style;
  const {disableSwitch} = useThemeConfig().colorMode;
  const {colorMode, setColorMode} = useColorMode();
  const isBrowser = useIsBrowser();

  if (disableSwitch) {
    return null;
  }

  const isDark = colorMode === 'dark';

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        type="button"
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          navbarStyle === 'dark' && styles.darkNavbarColorModeToggle,
        )}
        disabled={!isBrowser}
        onClick={() => setColorMode(isDark ? 'light' : 'dark')}
        title={isDark ? 'modo oscuro' : 'modo claro'}
        aria-label={
          isDark
            ? 'Cambiar a modo claro (actualmente modo oscuro)'
            : 'Cambiar a modo oscuro (actualmente modo claro)'
        }>
        {isDark ? (
          <IconDarkMode className={styles.toggleIcon} />
        ) : (
          <IconLightMode className={styles.toggleIcon} />
        )}
      </button>
    </div>
  );
}
