
import { Card, CardDeck } from 'react-bootstrap';
import FancyBar from "../../resources/PlacesToGo-img/Dockyard.jpg";
import CraftBrew from "../../resources/PlacesToGo-img/Craftbrew.jpg";
import Alchemist from "../../resources/PlacesToGo-img/Alchemist.jpg";
import Craft from "../../resources/PlacesToGo-img/Craf.jpg";


const Bars = () => {
    return (
        <>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={FancyBar} width="500" length="600" />
                    <Card.Body>
                        <div className="container text-center">
                            <Card.Title>The Dockyard</Card.Title>
                        </div>
                        <Card.Text>
                            The Dockyard is a unique gastropub/bar that is near by the Quays docks. Which excels in servering beers and ale tailored to customers needs as well as serving customers homemade artisan pies.
                    </Card.Text>
                        <section>
                            <div className="container text-center">
                                <h5>Offers & Discounts</h5>
                                <p>Partnering with QA Cinema we have selected offers for customers that have a vaild cinema ticket</p>
                                <div>
                                    <ul>
                                        <li> On Tuesday 10% off food</li>
                                        <li> Buy 1 drinks get 1 for free </li>
                                        <li>Groups of 6 get 2 large pies and 3 free drinks when spending over £35 on Fridays</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container text-center">
                                <h5>Contact Details</h5>
                                <p>Telephone Number:0161 713 3810 </p>
                                <h6>Our Address:</h6>
                                <p>DockHouse, Media City, Manchester, Salford M50 2EQ</p>
                                <div>
                                    <h5>Vist Our Website</h5>
                                    <p>For more information</p>
                                </div>
                                <a target="_blank" href="https://dockyard.pub/media-city/">The Dockyard</a>
                            </div>
                        </section>
                    </Card.Body>
                    <Card.Footer>
                        <div className=" container text-center">
                            <small className="text-muted">Last updated 6 months ago</small>
                        </div>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Craft} />
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
                                <h5>Offers & Discounts </h5>
                                <p>With our partners QA Cinema we have selected offers and discounts, for customers that have a vaild cinema ticket</p>
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
                                <p>Unit 1, Digital World Centre, Lowry Plaza, Manchester, The Quays, Salford M50 3UB</p>
                                <div>
                                    <h5>Vist Our Website</h5>
                                    <p>For more information</p>
                                </div>
                                <a target="_blank" href="http://craftbrew-uk.com/">Craftbrew</a>
                            </div>
                        </section>
                    </Card.Body>
                    <Card.Footer>
                        <div className=" container text-center">
                            <small className="text-muted">Last updated 1 month ago</small>
                        </div>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Alchemist} />
                    <Card.Body>
                        <div className="container text-center">
                            <Card.Title>The Alchemist</Card.Title>
                        </div>
                        <Card.Text> We love to create masterful cocktails
                        to tantalise your taste buds and to capture all of your sense. Using theatre to server most of our drinks
                        which is unconventional compare to traditional methods.
                    </Card.Text>

                        <section>
                            <div className="container text-center">
                                <h5>Offers & Discounts</h5>
                                <p>QA Cinema customers are entiled for selected discounts which are vaild for a limited amount of time</p>
                                <div>
                                    <ul>
                                        <li> On Thursday 25% off food and drinks </li>
                                        <li> Buy 1 drinks get 1 for free during lunch time </li>
                                        <li> 15% off for groups of 6</li>
                                        <li> Chemist Saturdays: 10% drinks or 10% food after spending £45 </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container text-center">
                                <h5>Contact Details</h5>
                                <p>Telephone Number: 0161 872 7396</p>
                                <h6>Our Address:</h6>
                                <p>The Bund, The Quays, MediaCityUK,Manchester, Salford M50 3AB</p>
                                <div>
                                    <h5>Vist Our Website</h5>
                                    <p>For more information</p>
                                </div>
                                <a target="_blank" href="https://thealchemist.uk.com/menus/">The Alchemist</a>
                            </div>
                        </section>

                    </Card.Body>
                    <Card.Footer>
                        <div className=" container text-center">
                            <small className="text-muted">Last updated 27/08/2020</small>
                        </div>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <br></br>
            <div className="container text-center">
                <footer>&copy; Copyright 2021 QA Cinemas</footer>
            </div>

        </>
    )

}

export default Bars;
