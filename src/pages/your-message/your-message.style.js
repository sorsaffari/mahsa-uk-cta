import styled from 'styled-components';

export const YourMessageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  textarea {
    border: none;
    border-radius: none;
    width: 100%;
    height: calc(100% - 2rem);
    resize: none;
    padding: 1rem;
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
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    button {
      height: 2rem !important;
    }
  }
  .mantine-Modal-title {
    font-size: 1.4rem;
  }
`;
