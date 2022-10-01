import { Button } from '../button/button';
import { SCModal } from './modal.style';

export const Modal = (props) => {
  return (
    <SCModal {...props}>
      <div className='body'>{props.children}</div>
      {props.hasConfirm && (
        <Button variant='secondary' onClick={props.onClose} fullWidth>
          Got it!
        </Button>
      )}
    </SCModal>
  );
};
