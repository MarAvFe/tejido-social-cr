import React, {type ReactNode} from 'react';
import {AcronymModeProvider} from '@site/src/components/Acronym/AcronymModeContext';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return <AcronymModeProvider>{children}</AcronymModeProvider>;
}
