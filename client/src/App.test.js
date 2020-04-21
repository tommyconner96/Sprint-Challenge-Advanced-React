import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PlayerCard from './components/PlayerCard';
import DarkButton from './components/DarkButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays Title', () => {
  const { getByText } = render(<App />)
  const title = getByText('Womens World Cup Players')
  expect(title).toBeInTheDocument()
})

test('testing for a specific string from returned data', async () => {

  const { findByText } = render(<PlayerCard />)

  expect(await findByText(/alex morgan/i)).toBeInTheDocument();

})

it("darkmode button captures clicks", async () => {

  const { getByText } = render(
<DarkButton />
  );
  const button = getByText("Dark Mode");
  fireEvent.click(button);
});
afterEach(cleanup);