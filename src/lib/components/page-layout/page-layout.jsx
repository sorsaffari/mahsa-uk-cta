import { Link } from 'react-router-dom';
import {
  SCBackIcon,
  SCContainer,
  SCContent,
  SCNav,
  SCNavCenter,
  SCNavSide,
} from './page-layout.style';

export const PageLayout = ({ children, title, prevPath, nextLink }) => {
  return (
    <SCContainer>
      <SCNav>
        {prevPath && (
          <SCNavSide style={{ justifyContent: 'left' }}>
            <Link to={prevPath}>
              <SCBackIcon size={36} stroke={2} color='#554AF0' />
            </Link>
          </SCNavSide>
        )}
        <SCNavCenter style={{ justifyContent: 'center' }}>
          <h1>{title}</h1>
        </SCNavCenter>
        {nextLink && (
          <SCNavSide style={{ justifyContent: 'right' }}>{nextLink}</SCNavSide>
        )}
      </SCNav>
      <SCContent>{children}</SCContent>
    </SCContainer>
  );
};
