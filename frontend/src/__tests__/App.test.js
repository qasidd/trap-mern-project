import App from '../App';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';
import { expect, it } from '@jest/globals';



//Snapshot test: 
describe(`Snapshot test of APP`, () => {
  it(`it should match the snapshot everytime it's rendered`, () => {
    const instance = create(<App/>).toJSON();
    expect (instance).toMatchSnapshot();

  })

});

