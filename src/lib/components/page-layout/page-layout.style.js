import styled from 'styled-components';

export const SCContainer = styled.div`
  height: 100%;
  max-width: 750px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const SCNav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const SCNavSide = styled.div`
  display: flex;
  width: 25%;
`;

export const SCNavCenter = styled.div`
  display: flex;
  width: 50%;
`;

export const SCContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
  border: 1px solid red;
`;
