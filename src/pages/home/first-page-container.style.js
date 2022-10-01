import styled from 'styled-components';

const FirstPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background: #000;
  font-family: 'Poppins', sans-serif;

  #home-page-intro {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 350px;
    padding-bottom: 10vh;
  }

  h1.headline {
    color: #fff;
    font-weight: 600;
    text-align: center;
    margin: 1.25rem 0 3.5rem 0;
    font-size: 2rem;
    line-height: 2.75rem;
  }

  .action-btn {
    height: 56px;

    border-radius: 12px;
    font-size: 1rem;
    color: #554af0;

    display: flex;
    justify-content: center;
  }

  img.mahsa {
    width: 214px;
    height: 365px;
  }
`;

export default FirstPageContainer;
