
import PlacesToGo from "../components/PlacesToGo/PlacesToGo";
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import {create} from 'react-test-renderer';

describe(`Places Testing`, () => {
    describe(`onSubmit Test`, () =>{

        //Create the fake function: 
        const mockSubmit = jest.fn();
        const info = "Bars"; 

        it(`it should match the snapshot every time it's rendered`, () => {
            const instance = create(<PlacesToGo/>).toJSON();
            expect(instance).toMatchSnapshot();


        })



    })
})