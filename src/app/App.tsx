import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Card } from 'src/pages/Card';

import { theme } from 'src/shared/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card />
    </ThemeProvider>
  );
};
