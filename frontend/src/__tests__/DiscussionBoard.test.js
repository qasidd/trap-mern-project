import Discussion from '../components/pages/Discussionboard';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<Discussion/>).toJSON();
    expect(instance).toMatchSnapshot();
    
})