import { PageLayout } from '../../lib/components/page-layout/page-layout';
import { useDocumentTitle } from "@mantine/hooks";
import { Alert } from "../../lib/components/alert/alert";
import { ReactComponent as IconInfoSquare } from '../../assets/icons/icon-info-sqiare-fill.svg';
import { SCContainer } from "./page-done.style";


export const PageDone = () => {
  useDocumentTitle('Stand with Iran | Thank you');

  return (
    <PageLayout title='Almost done' prevPath='/'>
      <SCContainer>
        <h1>
          Almost done
        </h1>

        <Alert
          className='alert'
          icon={<IconInfoSquare width={40} height={40} />}
        >
          <p>Your letter is NOT yet send to your MP. WriteToThem.com will send you an email (in 10 to 15 minutes from the time of submission) to verify your email address.</p>
        </Alert>
        <br />
        <h2>
          Thank you!
        </h2>
        <br />
        <p class="thank-you-text">
          Thank you for standing for human rights in Iran and showing your suppost for #MahsAmini.
        </p>

      </SCContainer>
    </PageLayout>
  );
};
