import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import FirstPageContainer from './first-page-container.style.js';
import Mahsa from './mahsa.png';

export const PageHome = () => {
  return (
    <FirstPageContainer>
      <section id='home-page-intro'>
        <img src={Mahsa} alt='Mahsa Amini' className='mahsa' />
        <h1 className='headline'>
          Show your support for <br />
          #MahsaAmini
        </h1>
        <Button
          className="action-btn"
          variant='light'
          component={Link}
          to='/postcode'
          fullWidth
        >
          Write to your MP
        </Button>
      </section>
    </FirstPageContainer>
  );
};
