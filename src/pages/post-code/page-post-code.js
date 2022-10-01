import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageLayout } from '../../lib/components';
import { Button } from '../../lib/components/button/button';
import { readMp, validatePostCode } from '../../services/api';
import {
  SCContainer,
  SCPostCodeLookup,
  SCTextInput,
} from './page-post-code.style';

export const PagePostCode = () => {
  const history = useHistory();

  const [postCode, setPostcode] = useState('');
  const [isValidatingPostCode, setIsValidatingPostCode] = useState(false);
  const [postCodeValidationError, setPostCodeValidationError] = useState('');

  const handlePostCodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handlePostCodeSubmit = async () => {
    try {
      setIsValidatingPostCode(true);
      setPostCodeValidationError('');

      await validatePostCode(postCode);

      const mp = await readMp(postCode);
      history.push(`/message?postcode=${postCode}&mp=${mp.nameDisplayAs}`);
    } catch {
      setPostCodeValidationError('Post code is invalid.');
    } finally {
      setIsValidatingPostCode(false);
    }
  };

  return (
    <PageLayout title='Enter Your Post Code' prevPath='/'>
      <SCContainer>
        <SCPostCodeLookup>
          <SCTextInput
            error={postCodeValidationError}
            label='Enter your UK post code'
            placeholder='SW1H 9NB'
            onChange={handlePostCodeChange}
            size='lg'
            radius='md'
          />
          <Button
            variant='primary'
            onClick={handlePostCodeSubmit}
            loading={isValidatingPostCode}
            disabled={!postCode}
            fullWidth
            size='lg'
            radius='md'
          >
            Next
          </Button>
        </SCPostCodeLookup>
      </SCContainer>
    </PageLayout>
  );
};
