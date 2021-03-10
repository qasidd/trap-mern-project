import GettingThere from '../components/Getting-There/GettingThere';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<GettingThere/>).toJSON();
    expect(instance).toMatchSnapshot();
    
})