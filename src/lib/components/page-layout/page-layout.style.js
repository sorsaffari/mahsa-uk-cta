import styled from 'styled-components';
import { IconChevronLeft } from '@tabler/icons';


export const SCContainer = styled.div`
  height: 100%;
  max-width: 750px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`;

export const SCNav = styled.nav`
  width: 100%;
  height: 70px;

  box-shadow: inset 0px -0.5px 0px #E2E3E4;

  display: flex;
  justify-content: space-between;
  align-items: c;
  padding: 0 2rem;
`;

export const SCNavSide = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
`;

export const SCNavCenter = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const SCContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;

export const SCBackIcon = styled(IconChevronLeft)`
    display: block;
    margin: auto 0;
`