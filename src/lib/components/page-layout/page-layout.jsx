import { Link } from 'react-router-dom';
import {
  SCBackIcon,
  SCContainer,
  SCContent,
  SCNav,
  SCTitle,
} from './page-layout.style';

export const PageLayout = ({ children, title, prevPath, nextLink }) => {
  return (
    <SCContainer>
      <SCNav>
        {prevPath && (
          <div className='nav-part nav-part-left'>
            <Link to={prevPath}>
              <SCBackIcon size={30} color='#554AF0' />
            </Link>
          </div>
        )}
        <div className='nav-part nav-part-center'>
          <SCTitle>{title}</SCTitle>
        </div>
        <div className='nav-part nav-part-right'>{nextLink}</div>
      </SCNav>
      <SCContent>{children}</SCContent>
    </SCContainer>
  );
};
