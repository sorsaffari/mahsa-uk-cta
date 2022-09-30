import { useState } from 'react';
import { IconChevronDown, IconChevronUp, IconAlignLeft } from '@tabler/icons';
import { StyledTurncate } from './truncate.style';

export const Truncate = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledTurncate isOpen={isOpen} className='truncate'>
      <div
        className='truncate__header'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className='truncate__header__left'>
          <div className='truncate__header__left__icon'>
            <i>
              <IconAlignLeft />
            </i>
          </div>
          <div className='truncate__header__left__title'>
            <h6>{props.title}</h6>
            <span>{props.description}</span>
          </div>
        </div>
        <div className='truncate__header__right'>
          <i>{isOpen ? <IconChevronUp /> : <IconChevronDown />}</i>
        </div>
      </div>
      <div className='truncate__body'>
        <div>{props.children}</div>
        {!isOpen ? <span onClick={() => setIsOpen(true)}>Read more</span> : ''}
      </div>
    </StyledTurncate>
  );
};
