import styled from 'styled-components';
import { Modal } from '@mantine/core';

export const SCModal = styled(Modal)`
  .mantine-Modal-modal {
    border-radius: 20px;
  }

  .mantine-Modal-title {
    font-size: 1.7rem;
    font-weight: 600;
  }

  .mantine-Modal-body {
    p {
      font-weight: 0.85rem;
      line-height: 1.42rem;
    }
  }

  .body {
    max-height: 400px;
    overflow: auto;
  }
`;
