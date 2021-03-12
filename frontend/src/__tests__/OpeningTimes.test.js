import OpeningTime from '../components/Opening-Times/CinemaTime';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<OpeningTime/>).toJSON();
    expect(instance).toMatchSnapshot();
    
})