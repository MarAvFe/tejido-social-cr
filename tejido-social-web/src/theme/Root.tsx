import React, {type ReactNode} from 'react';
import {AcronymModeProvider} from '@site/src/components/Acronym/AcronymModeContext';
import {TextSizeProvider} from '@site/src/components/A11yToolbar/TextSizeContext';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <TextSizeProvider>
      <AcronymModeProvider>{children}</AcronymModeProvider>
    </TextSizeProvider>
  );
}
