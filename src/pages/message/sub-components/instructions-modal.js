import { Modal } from '../../../lib/components/modal/modal';

export const InstructionsModal = ({ onClose }) => {
  return (
    <Modal
      opened={true}
      onClose={onClose}
      title='Instructions'
      centered
      hasConfirm
    >
      <p style={{ color: '#777' }}>
        Please be polite, concise and to the point; if you abuse your London
        Assembly Members you devalue the service for all users.
      </p>
      <p style={{ color: '#777' }}>
        Use your own words; we block copied-and-pasted identical messages.
      </p>
      <p style={{ color: '#777' }}>
        Lords vote on and amend UK bills before they become law. By writing to a
        Lord you might be able to tell them about something you think they
        should care about, provide information to someone who you support, or
        provide counter evidence to someone you disagree with. For other
        matters, it might be better to contact your MP or a local
        representative.
      </p>
    </Modal>
  );
};
