import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Slider from 'react-slick';
import axios from 'axios';
import { css } from './app.css';
import { readConstituencyId, readMp, validatePostCode } from "../services/api";

const messages = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [],
};

const Step = ({ children, title }) => {
  return (
    <div css={css.step}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export const App = () => {
  const [postCode, setPostcode] = useState('');
  const [isValidatingPostCode, setIsValidatingPostCode] = useState(false);
  const [postCodeValidationError, setPostCodeValidationError] = useState('');
  const [mp, setMp] = useState();

  const handlePostCodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handlePostCodeSubmit = async () => {
    try {
      setIsValidatingPostCode(true);
      setPostCodeValidationError('');

      await validatePostCode(postCode)

      const mp = await readMp(postCode);
      setMp(mp);
    } catch {
      setPostCodeValidationError('Post code is invalid.');
    } finally {
      setIsValidatingPostCode(false);
    }
  };

  return (
    <main css={css.main}>
      <h1>SHOW YOUR SUPPORT FOR MAHSA</h1>
      <h2>Write to your ...</h2>

      <Step title='Enter your UK post code'>
        <div css={css.postCodeFinder}>
          <TextField
            error={!!postCodeValidationError}
            helperText={postCodeValidationError}
            label="Enter your UK post code"
            autoFocus
            variant='outlined'
            onChange={handlePostCodeChange}
          />
          <Button
            onClick={handlePostCodeSubmit}
            loading={isValidatingPostCode ? 1 : 0}
          >
            Go
          </Button>
        </div>
      </Step>

      {!!postCode && <Step title='Personalise your message'>
        <Slider {...sliderSettings}>
          {messages.map((message) => (
            <div key={message} css={css.suggestedMessage}>
              <textarea value={message} />
              <Button className='copy-message-btn'>Copy message</Button>
            </div>
          ))}
        </Slider>
      </Step>}

      {mp && (
        <Step
          title={`Scroll through this page and click on the name of your MP (${mp.nameDisplayAs})`}
        >
          <iframe
            id='wtt'
            name='wtt'
            css={css.writeToThemIframe}
            title='write to your MP'
            src={`https://writetothem.com/who?pc=${postCode}`}
          />
        </Step>
      )}
    </main>
  );
};
