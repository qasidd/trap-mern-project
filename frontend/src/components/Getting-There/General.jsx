import QA from "../../resources/Location/QA.jpg";
import React from 'react'
import { Grid } from 'semantic-ui-react'


const General = () => {

    return (
        <>
            <section>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <div className="container text-center">
                                <img src={QA} alt="QA Cinemas" width="750px" height="500px"></img>
                                <div className="text-center">
                                    <footer>
                                        <h6>Image of QA Cinemas</h6>
                                    </footer>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <div className="container">
                                <div className="align-right">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.69070876321!2d-2.2885056841567497!3d53.473987480006045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae15ae0912e7%3A0x39957d91b0a3996f!2sQA!5e0!3m2!1sen!2suk!4v1614871582257!5m2!1sen!2suk"
                                        width="750" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                                        <div className="container text-center">
                                            <footer>
                                                <h6>Location Map of the cinema</h6>
                                            </footer>
                                        </div>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </section>
            <br></br>

        </>
    )

}

export default General;

