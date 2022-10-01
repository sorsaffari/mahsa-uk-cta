import { Button, TextInput } from '@mantine/core';
import styled from 'styled-components';

export const SCContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SCPostCodeLookup = styled.div`
  width: 90%;
`;

export const SCTextInput = styled(TextInput)`
  margin-bottom: 1rem;

  label {
    font-size: 0.85rem;
    margin: 0 0 0.25rem 0.25rem;
  }

  input {
    height: 56px;
    border-radius: 12px;

    &:focus {
      border-color: #554af0;
    }
  }

  .mantine-InputWrapper-error {
    font-size: 0.85rem;
    margin-left: 0.25rem;
  }
`;

export const SCNextButton = styled(Button)`
  height: 56px;
  background-color: #554af0;
  border-radius: 12px;

  &:disabled {
    background-color: #f8f8fa;
    color: #d2d2d7;
  }
`;
