import { Modal } from '@mantine/core';
import styled from 'styled-components';

export const SCModal = styled(Modal)`
  .alert {
    margin-bottom: 2rem;
  }

  h1.title {
    font-size: 1rem;
    color: #686777;
    margin-top: 2rem;
    font-weight: 600;
  }

  .mantine-Modal-inner {
    padding: 0;
    align-items: flex-end;
  }

  .mantine-Modal-modal {
    border-radius: 20px 20px 0 0;
  }

  .mantine-Modal-header {
    display: none;
  }

  .template-card {
    margin-top: 1.5rem;
  }

  .button {
    background-color: #f8f8fa;
    color: #554af0;
  }
`;
