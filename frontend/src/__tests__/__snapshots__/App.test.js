import { render, screen } from '@testing-library/react';
import App from '../../App';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Snapshot test: 

describe(`Snapshot test of APP`, () => {
  it(`it should match the snapshot everytime it's rendered`, () => {
    const instance = create(<App/>).toJSON();
    expect (instance).toMatchSnapshot();

  })

});
