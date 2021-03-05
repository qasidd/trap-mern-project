import React from 'react';
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Public from "./Public"

const Options = () => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <section>
                <div className="container text-center">
                    <p>Please click on the button below for detail directions if customers are traveling to our cinemas using 
                        public transport such as Bus or Tram. 
                    </p>
                </div>
                <div className="container text-center">
                <button type="button" href="#Public.jsx">Click Me</button>


                
                </div>
            </section>
        </Card>
        </>
    )

}

export default Options;