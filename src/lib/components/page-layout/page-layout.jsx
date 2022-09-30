import { Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  SCContainer,
  SCContent,
  SCNav,
  SCNavCenter,
  SCNavSide,
} from './page-layout.style';

export const PageLayout = ({ children, title, prev, next }) => {
  return (
    <SCContainer>
      <SCNav>
        {prev && (
          <SCNavSide style={{ justifyContent: 'left' }}>
            <Link to={prev.path}>{prev.text}</Link>
          </SCNavSide>
        )}
        <SCNavCenter style={{ justifyContent: 'center' }}>
          <Title order={1}>{title}</Title>
        </SCNavCenter>
        {next && (
          <SCNavSide style={{ justifyContent: 'right' }}>
            <Link to={next.path}>{next.text}</Link>
          </SCNavSide>
        )}
      </SCNav>
      <SCContent>{children}</SCContent>
    </SCContainer>
  );
};
