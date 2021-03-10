
import PlacesToGo from "../components/PlacesToGo/PlacesToGo";
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 

describe(`Places Testing`, () => {
    describe(`onSubmit Test`, () =>{

        //Create the fake function: 
        const mockSubmit = jest.fn();
        const view = "Bars"; 

        it(`Should pull info and images of bars`, () => {

            //arraging 
            const {container} = render(<PlacesToGo/>);
            const barsInput = container.querySelector(`[input=Bars]`);
            expect(barsInput.value).toEqual(``);

            //act - simulated typing
            userEvent.hover(barsInput, data);

            //assert
            expect(barsInput.value).toEqual(data);

        })



    })
})