import styled, { css } from 'styled-components';

export const StyledTurncate = styled.div`
  max-height: 8.5rem;
  transition: max-height 0.5s;
  margin-bottom: 0.75rem;
  overflow: hidden;
  .truncate__header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
    height: 3.5rem;
    cursor: pointer;
    &__left {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      align-content: stretch;
      &__icon {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        border-radius: 0.8rem;
        background: #f8f8fa;
        width: 3.3rem;
        height: 3.3rem;
        margin-right: 1rem;
        i {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 0.3rem;
          background: #554af044;
          color: #554af0;
        }
      }
      &__title {
        h6 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 500;
          color: #04021d;
        }
        span {
          font-size: 0.8rem;
          color: #686777;
        }
      }
    }
    &__right {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 2.5rem;
      height: 2.5rem;
      i {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        color: #777;
        cursor: pointer;
      }
    }
  }
  .truncate__body {
    padding: 0.5rem;
    position: relative;
    max-height: 18rem;
    overflow-y: auto;

    .overlay {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: flex-end;
      align-content: center;
      position: absolute;
      height: 5rem;
      width: 100%;
      top: 0;
      opacity: 1;
      transition: opacity 0.2s;
      background: rgb(255, 255, 255);
      font-size: 0.9rem;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  ${(props) =>
    props.isOpen &&
    css`
      max-height: 100vh !important;
      .truncate__body > span {
        opacity: 0;
      }
    `};
`;
