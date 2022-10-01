import { Button, Divider } from '@mantine/core';
import { Truncate } from '../../../../lib/components/truncate/truncate';
import { SCModal } from './templates-modal.style';
import { ReactComponent as IconInfoCircle } from '../../../../assets/icons/icons-info-circle.svg';
import { Alert } from '../../../../lib/components/alert/ alert';

export const TemplatesModal = ({ onClose, onSelect }) => {
  const templates = [
    {
      id: 1,
      message: 'aaa',
    },
    {
      id: 2,
      message: 'bbb',
    },
    {
      id: 3,
      message: 'ccc',
    },
  ];

  const handleTemplateUse = (template) => {
    onSelect(template);
    onClose();
  };

  return (
    <SCModal opened={true} onClose={onClose}>
      <Alert className='alert' icon={<IconInfoCircle size={40} />}>
        Use your own words; we block copied-and-pasted identical messages.
      </Alert>

      <Divider color='#E2E3E4' />

      <h1 className='title'>TEMPLATES</h1>

      {templates.map((template) => (
        <Truncate
          key={template.id}
          className='template-card'
          title='salam'
          description='hey'
        >
          <p
            style={{
              color: '#444',
              marginTop: 0,
              fontSize: '0.9rem',
              lineHeight: 1.2,
            }}
          >
            {template.message}
          </p>
          <Button
            className='button'
            variant='light'
            color='violet'
            radius='md'
            size='md'
            fullWidth
            onClick={() => handleTemplateUse(template)}
          >
            Use this template
          </Button>
        </Truncate>
      ))}

      <Button
        className='button'
        variant='light'
        color='violet'
        radius='md'
        size='md'
        onClick={onClose}
        fullWidth
      >
        Go back to editing
      </Button>
    </SCModal>
  );
};
