import { IconAlertCircle } from '@tabler/icons';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLayout } from '../../lib/components/page-layout/page-layout';
import { SCNavLink } from '../../lib/components/page-layout/page-layout.style';
import { SCAlert, SCWttIFrame } from './page-wtt.style';
import {
  WttInstructions,
  WttInstructionsModal,
} from './sub-components/wtt-instructions-modal/wtt-instructions-modal';

export const PageWtt = () => {
  const { search: searchParams } = useLocation();
  const [showInstructions, setShowInstructions] = useState(true);

  const handleInstructionsShow = () => {
    setShowInstructions(true);
  };

  const handleInstructionsHide = () => {
    setShowInstructions(false);
  };

  const wttUrl = useMemo(() => {
    const postCode = new URLSearchParams(searchParams).get('postcode');

    return `https://writetothem.com/who?pc=${postCode}`;
  }, [searchParams]);

  return (
    <PageLayout
      title='WriteToThem.com'
      prevPath={`/message${searchParams}`}
      nextLink={<SCNavLink to='/done'>Done</SCNavLink>}
    >
      <SCAlert
        icon={<IconAlertCircle size={40} />}
        color='violet'
        radius='md'
        variant='outline'
        onClick={handleInstructionsShow}
      >
        <p>Ready to send your letter to your MP?</p>
        <p>Tap to learn more.</p>
      </SCAlert>

      {showInstructions && (
        <WttInstructionsModal onClose={handleInstructionsHide} />
      )}

      <SCWttIFrame src={wttUrl} id='wtt' name='wtt' title='Write to your MP' />
    </PageLayout>
  );
};
