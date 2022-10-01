import { SCContainer } from './alert.style';

export const Alert = ({ children, className, icon }) => {
  return (
    <SCContainer className={className}>
      <div className='icon'>{icon}</div>
      <div className='content'>{children}</div>
    </SCContainer>
  );
};
