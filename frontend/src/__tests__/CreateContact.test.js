import ContactUs from '../components/Contactsus/createcontact';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<ContactUs/>).toJSON();
    expect(instance).toMatchSnapshot();
    
})