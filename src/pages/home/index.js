import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import FirstPageContainer from './first-page-container.style.js';
import Mahsa from './mahsa.png';

export const Home = () => {
  return (
    <FirstPageContainer>
      <section id='home-page-intro'>
        <img src={Mahsa} alt='Mahsa Amini' className='mahsa' />
        <h1>
          Show your support for <br />
          #MahsaAmini
        </h1>
        <Button
          variant='light'
          color='violet'
          radius='md'
          component={Link}
          to='/postcode'
        >
          Write to your MP
        </Button>
      </section>
    </FirstPageContainer>
  );
};
