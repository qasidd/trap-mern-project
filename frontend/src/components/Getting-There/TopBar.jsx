import { Card, ListGroup } from 'react-bootstrap';
import QA from "../../resources/Location/QA.jpg";


const TopBar = () => {
    return (
        <>

            <section>

                <div className="container text-center">
                    <img src={QA} alt="QA Cinemas" width="650px" height="450px"></img>
                </div>
                <div className="text-center">
                    <footer>
                        <h6>Image of QA Cinemas</h6>
                    </footer>
                </div>
                <div className="container text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.69070876321!2d-2.2885056841567497!3d53.473987480006045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae15ae0912e7%3A0x39957d91b0a3996f!2sQA!5e0!3m2!1sen!2suk!4v1614871582257!5m2!1sen!2suk"
                        width="850" height="600" style={{ border: 12 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </section>
            <br></br>

            <section>
                <div className="container text-left">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header><h4>Address</h4></Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item><h5>Address 1:</h5>
                                <p>5th Floor Anchorage, 1
                                Anchorage Quay,
                                Salford Quays,
                                Manchester, M50 3YJ</p>
                            </ListGroup.Item>
                            <ListGroup.Item><h5>Telephone:</h5>
                                <p>01942 527 010</p>
                            </ListGroup.Item>
                            <ListGroup.Item><h5>Address 2:</h5>
                                <p>3 Anchorage Quay,
                                Salford, M50 3XL</p></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </section>
        </>
    );

}

export default TopBar;