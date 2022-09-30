import { Router } from './router';
import { MantineProvider } from '@mantine/core';
import GlobalStyle from '../assets/styles/global-styles';

export const App = () => {
  return (
    <MantineProvider withNormalizeCSS>
      <GlobalStyle />
      <Router />
    </MantineProvider>
  );
};
