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





  return (
    <main css={css.main}>
      <h1>SHOW YOUR SUPPORT FOR MAHSA</h1>
      <h2>Write to your ...</h2>

      {/* {!!postCode && <Step title='Personalise your message'>
        <Slider {...sliderSettings}>
          {messages.map((message) => (
            <div key={message} css={css.suggestedMessage}>
              <textarea value={message} />
              <Button className='copy-message-btn'>Copy message</Button>
            </div>
          ))}
        </Slider>
      </Step>} */}

      {/* {mp && (
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
        </Step> */}
      {/* )} */}
    </main>
  );
};
