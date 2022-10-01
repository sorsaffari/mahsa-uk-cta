import styled from 'styled-components';
import { Modal } from "../../../../lib/components/modal/modal";

export const SCModal = styled(Modal)`
  .step + .step {
    margin-bottom: 1rem;
  }

  .step {
    .step-counter {
      font-size: 1rem;
      font-weight: 800;
    }
  }

  p {
    color: #777;
  }
`;
