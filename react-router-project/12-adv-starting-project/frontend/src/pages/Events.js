import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch records' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
