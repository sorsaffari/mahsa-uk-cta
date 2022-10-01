import { Alert } from '@mantine/core';
import styled from 'styled-components';

export const SCAlert = styled(Alert)`
  margin-bottom: 1rem;
  p {
    margin: 0;
    color: #776ef3;
    font-size: 0.75rem;
  }

  .helper-text {
    font-size: 0.625rem;
  }
`;

export const SCWttIFrame = styled.iframe`
  width: 100%;
  flex-grow: 1;
`;
