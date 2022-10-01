import { SCContainer } from './alert.style';

export const Alert = ({ children, className, icon, onClick }) => {
  return (
    <SCContainer className={className} onClick={onClick}>
      <div className='icon'>{icon}</div>
      <div className='content'>{children}</div>
    </SCContainer>
  );
};
