import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { SCModal } from "./wtt-instructions-modal.style";


export const WttInstructionsModal = ({ onClose }) => {
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const mp = searchParams.get("mp")

  const instructionsSteps = [
    `In the WriteToThem.com page, you can see the list of your representatives, including your MP. Scroll down to find the name of your MP, <strong>${mp}</strong>. Click on the MP's name.`,
    "On the next page, you will see a form for submitting your letter. Your message from before has been copied to your clipboard. Paste it into the text area.",
    "Proceed to fill in your contact details.",
    'Click on "Preview and send".',
    `On the next page, review your letter and when you are happy with it, click on "I'm happy, send it".`,
    'Lastly, click on the "Done" button in the top-right corener of this page.'
  ]

  return (
    <SCModal
      opened={true}
      onClose={onClose}
      title='Instructions'
      centered
      hasConfirm
    >
      {instructionsSteps.map((step, index) => (
        <div className="step">
          <p className="step-counter">Step {index + 1}</p>
          <p className="step-text" dangerouslySetInnerHTML={{ __html: step }}></p>
        </div>
      ))}
    </SCModal>
  );
};
