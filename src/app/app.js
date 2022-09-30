import { Router } from './router';
import { MantineProvider } from '@mantine/core';

export const App = () => {
  return (
    <MantineProvider>
      <Router />;
    </MantineProvider>
  );
};
