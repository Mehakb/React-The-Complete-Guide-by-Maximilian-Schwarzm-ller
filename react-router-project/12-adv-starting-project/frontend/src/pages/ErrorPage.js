import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from './PageContent';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <PageContent title='An error occured!'>
        <p>{error.data.message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
