import Home from '../components/Home/Home';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<Home />).toJSON();
    expect(instance).toMatchSnapshot();
})