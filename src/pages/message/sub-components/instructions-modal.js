import { Modal } from '../../../lib/components/modal/modal';

const writingTips = [
  "Be polite and to the point.",
  "First paragraph should be a clear and concise description of your demand.",
  "Second paragraph shoulld contain context on the topic. Where possible cite news articles of credible sources to back your case.",
  "If you know your MP enough to know their values, try to link your ask as to their mission and what they value.",
  "Third paragraph should be about impact. Be clear about how your MP's response to your demand will help the cause. Where possible, point out how this cause impacts communities in the UK that your MP serves.",
  "Lastly, repeat your demand before sigining the letter."
]

export const InstructionsModal = ({ onClose }) => {
  return (
    <Modal
      opened={true}
      onClose={onClose}
      title='Writing Tips'
      centered
      hasConfirm
    >
      {writingTips.map(tip => <p style={{ color: '#777' }}>{tip}</p>)}
    </Modal>
  );
};
