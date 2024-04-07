import '@testing-library/jest-dom'
import { findByText, render, screen } from '@testing-library/react';
import App, { routesConfig } from './App';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

test('renders Sidebar', async () => {
  const mockChampions = {
    "type": "champion",
    "format": "standAloneComplex",
    "version": "6.24.1",
    "data": {
      "Aatrox": {
        "id": "Aatrox",
        "key": "266",
        "name": "Aatrox",
        "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
        "image": {
          "full": "Aatrox.png",
        }
      },
      "Ahri": {
        "id": "Ahri",
        "key": "103",
        "name": "Ahri",
        "blurb": "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
        "image": {
          "full": "Ahri.png",
        }
      }
    }
  }
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockChampions),
    }),
  ) as jest.Mock;

  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });

  const { findByText } = render(<RouterProvider router={router} />);
  const message = await findByText('Home');
  expect(message).toBeInTheDocument();
});

test('landing on the error page', () => {
  const invalidPage = '/some/invalid/page'

  const router = createMemoryRouter(routesConfig, {
    initialEntries: [invalidPage],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getByText(/Crap/i)).toBeInTheDocument();
});
