import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';
import MainNavigation from '../components/MainNavigation';

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;
