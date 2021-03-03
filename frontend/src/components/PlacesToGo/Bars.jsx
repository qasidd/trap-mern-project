
import { Card, CardDeck, CardImg, CardProps } from 'react-bootstrap';
import FancyBar from "../../resources/PlacesToGo-img/01-Bar.jpg";
import CraftBrew from "../../resources/PlacesToGo-img/Craftbrew.jpg";


const Bars = () => {
    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={FancyBar} width="500" length="600" />
                <Card.Body>
                    <Card.Title>Yo</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={CraftBrew} />
                <Card.Body>
                    <div className="container text-center">
                        <Card.Title>CRAFTBREW</Card.Title>
                    </div>
                    <Card.Text>Here at Craftbrew we are a modern contemporary
                    cafe that excels in serving craft beer, wine and others drinks. To go with sandwiches,
                        homemade taps and deli boards from the local butcher. {' '}
                    </Card.Text>
                    <section>
                        <div className="container text-center">
                            <h5>Offers</h5>
                            <p>With our partners QA Cinmeas we have selected offers and discounts, for customers that have a vaild cinema ticket</p>
                            <div>
                                <ul>
                                    <li> On Wednesdays 15% off food and drinks</li>
                                    <li> Buy 2 drinks get 1 for free </li>
                                    <li>Spend £15 on drinks and get 2 free taps of your choice</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container text-center">
                            <h5>Contact Details</h5>
                            <p>Telephone Number: 01632 960107</p>
                            <h6>Our Address:</h6>
                            <p>Unit 1, Digital World Centre, Lowry Plaza, The Quays, Salford M50 3UB</p>
                        </div>
                    </section>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    )

}

export default Bars;
