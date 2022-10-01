import { Button } from '@mantine/core';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLayout } from '../../lib/components/page-layout/page-layout';
import { SCContainer } from './page-message.style';
import { InstructionsModal } from './sub-components/instructions-modal';
import { TemplatesModal } from './sub-components/templates-modal/templates-modal';
import { ReactComponent as IconDocument } from '../../assets/icons/icon-document.svg';
import { ReactComponent as IconInfo } from '../../assets/icons/icon-info-square.svg';

export const PageMessage = () => {
  const [showTemplatesModal, setShowTemplateModal] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(true);

  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const initialMessage = useMemo(() => {
    return [
      `Dear ${searchParams.get('mp')},`,
      'Write here ...',
      'Yours sincerely,',
    ].join('\n\n');
  }, [searchParams]);

  const [message, setMessage] = useState(initialMessage);

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

  return (
    <PageLayout title='Your Message' prevPath='/postcode'>
      <SCContainer>
        <textarea value={message} onChange={handleMessageChange}></textarea>

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
            <TemplatesModal onClose={handleTemplatesHide} />
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
