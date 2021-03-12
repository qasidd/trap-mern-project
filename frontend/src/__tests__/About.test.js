import About from '../components/About/About';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<About/>).toJSON();
    expect(instance).toMatchSnapshot();
})