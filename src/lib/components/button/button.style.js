import { Button } from '@mantine/core';
import styled from 'styled-components';

const backgroundColorByVariant = {
  primary: '#554af0',
  secondary: '#F8F8FA',
};

const colorByVariant = {
  primary: '#fff',
  secondary: '#554af0',
};

export const SCButton = styled(Button)`
  height: 56px;

  background-color: ${({ variant }) => backgroundColorByVariant[variant]};
  color: ${({ variant }) => colorByVariant[variant]};
  border-radius: 12px;
  font-size: 1rem;

  display: flex;
  justify-content: center;

  &:disabled {
    background-color: #f8f8fa;
    color: #d2d2d7;
  }
`;
