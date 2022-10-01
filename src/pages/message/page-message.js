import { Button } from '@mantine/core';
import { useMemo, useRef, useState } from 'react';
import copy from "copy-to-clipboard";
import { useHistory, useLocation } from 'react-router-dom';
import { PageLayout } from '../../lib/components/page-layout/page-layout';
import { SCContainer } from './page-message.style';
import { InstructionsModal } from './sub-components/instructions-modal';
import { TemplatesModal } from './sub-components/templates-modal/templates-modal';
import { ReactComponent as IconDocument } from '../../assets/icons/icon-document.svg';
import { ReactComponent as IconInfo } from '../../assets/icons/icon-info-square.svg';
import { SCNavLink } from "../../lib/components/page-layout/page-layout.style";

export const PageMessage = () => {
  const [showTemplatesModal, setShowTemplateModal] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(true);

  const messageRef = useRef();

  const { search } = useLocation();
  const history = useHistory();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const constructMessage = (message) => {
    return [
      `Dear ${searchParams.get('mp')},`,
      message,
      'Yours sincerely,',
    ].join('\n\n');
  };

  const [message, setMessage] = useState(constructMessage('Write here ...'));

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleTemplatesShow = () => {
    setShowTemplateModal(true);
  };

  const handleTemplatesHide = () => {
    setShowTemplateModal(false);
  };

  const handleInstructionsShow = () => {
    setShowInstructionsModal(true);
  };

  const handleInstructionsHide = () => {
    setShowInstructionsModal(false);
  };

  const handleTemplateSelect = (template) => {
    const newMessage = constructMessage(template.message);
    setMessage(newMessage);
    messageRef.current.focus();
  };

  const handleNext = () => {
    copy(message);
    history.push(`/wtt${search}`);
  }

  return (
    <PageLayout title='Your Message' prevPath='/postcode' nextLink={<SCNavLink onClick={handleNext}>Continue</SCNavLink>}>
      <SCContainer>
        <textarea ref={messageRef} value={message} onChange={handleMessageChange}></textarea>

        <div className='your-message__buttons'>
          <Button
            className='templates-btn'
            leftIcon={<IconDocument width={20} height={20} stroke='#686777' />}
            variant='outline'
            color='gray'
            radius='md'
            size='xs'
            onClick={handleTemplatesShow}
            compact
            uppercase
          >
            Templates
          </Button>

          {showTemplatesModal && (
            <TemplatesModal
              onClose={handleTemplatesHide}
              onSelect={handleTemplateSelect}
            />
          )}

          <Button
            leftIcon={<IconInfo width={20} height={20} stroke='#686777' />}
            variant='outline'
            color='gray'
            radius='md'
            size='xs'
            onClick={handleInstructionsShow}
            compact
            uppercase
          >
            Instructions
          </Button>

          {showInstructionsModal && (
            <InstructionsModal onClose={handleInstructionsHide} />
          )}
        </div>
      </SCContainer>
    </PageLayout>
  );
};
