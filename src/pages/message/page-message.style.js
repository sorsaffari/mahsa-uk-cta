import styled from 'styled-components';

export const SCContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  width: 100%;
  height: 100%;
  textarea {
    border: none;
    border-radius: none;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    resize: none;
    font-family: 'Poppins', sans-serif;
  }

  .your-message__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
    padding: 0.5rem 0 0 0;
    box-sizing: border-box;
    flex-basis: 2.5rem;
    flex-shrink: 0;

    button {
      height: 48px;

      border-color: #e2e3e4;
      color: #686777;
      font-size: 1rem;
      border-radius: 12px;

      padding: 0.75rem 1.25rem;
    }
  }

  .mantine-Modal-title {
    font-size: 1.4rem;
  }
`;
