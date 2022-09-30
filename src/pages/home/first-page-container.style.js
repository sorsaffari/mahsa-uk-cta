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
  font-family: 'Poppins';
  #home-page-intro {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    width: 20rem;
    padding-bottom: 10vh;
  }
  h1 {
    color: #fff;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.7rem;
  }
  .mahsa {
    width: 12rem;
    margin: 2rem auto 0;
  }
`;

export default FirstPageContainer;
