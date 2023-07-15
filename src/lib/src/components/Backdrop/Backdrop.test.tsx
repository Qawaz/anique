import React from 'react';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);

import { AniqueSystemThemeProvider } from '../ThemeProvider';
import { Backdrop } from './Backdrop';

describe('components/Backdrop', () => {
  it('Snapshot Test', () => {
    const backdrop = renderer
      .create(
        <AniqueSystemThemeProvider>
          <Backdrop />
        </AniqueSystemThemeProvider>
      )
      .toJSON();
    expect(backdrop).toMatchSnapshot();
  });

  it('Transparent background', () => {
    const backdrop = renderer
      .create(
        <AniqueSystemThemeProvider>
          <Backdrop transparent={true} />
        </AniqueSystemThemeProvider>
      )
      .toJSON();

    expect(backdrop).toHaveStyleRule('background-color', 'transparent');
  });
});
