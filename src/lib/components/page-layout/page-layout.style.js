import styled from 'styled-components';
import { IconChevronLeft } from '@tabler/icons';
import { Link } from 'react-router-dom';

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

  box-shadow: inset 0px -0.5px 0px #e2e3e4;

  display: flex;
  justify-content: space-between;
  align-items: c;
  padding: 0 1rem;

  .nav-part {
    display: flex;
    align-items: center;
  }

  .nav-part-left {
    width: 30px;
    justify-content: left;
  }

  .nav-part-center {
    justify-content: center;
  }

  .nav-part-right {
    justify-content: right;
  }
`;

export const SCContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-grow: 1;
`;

export const SCBackIcon = styled(IconChevronLeft)`
  display: block;
  margin: auto 0;
`;

export const SCTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const SCNavLink = styled(Link)`
  color: #554af0;

  &:visited {
    color: #554af0;
  }
`;
