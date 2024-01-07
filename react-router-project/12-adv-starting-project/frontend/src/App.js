import Homepage from './pages/Homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewEventPage from './pages/NewEventPage';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import EventDetailPage from './pages/EventDetailPage';
import ErrorPage from './pages/ErrorPage';

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
