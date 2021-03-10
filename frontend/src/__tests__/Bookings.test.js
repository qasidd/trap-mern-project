import Bookings from '../components/Booking/NewBooking';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<Bookings/>).toJSON();
    expect(instance).toMatchSnapshot();
    
})