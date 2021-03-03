import { Card, CardDeck } from 'react-bootstrap';
import Lime from "../../resources/PlacesToGo-img/Lime.jpg";
import Pier from "../../resources/PlacesToGo-img/Pier.jpg";
import Rouge from "../../resources/PlacesToGo-img/Rouge.jpg";


const Food=()=>{

    return (
        <>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Lime} alt="Lime bar and grill" />
                    <Card.Body>
                        <div className="container text-center">
                            <Card.Title>Lime</Card.Title>
                        </div>
                        <Card.Text>
                            At the heart of the center of Salford Quays, just a mile away from the city center. We server food daily 
                            from breakfast, bruch or lunch and dinner. Our menu is a combination of Southern Style american food with 
                            a twist of Japnese food. 
                    </Card.Text>
                        <section>
                            <div className="container text-center">
                                <h5>Offers & Discounts</h5>
                                <p>Partnering with QA Cinema we have selected offers for customers that have a vaild cinema ticket</p>
                                <div>
                                    <ul>
                                        <li> 10% off on all items on the menu on Tuesday</li>
                                        <li> Buy 2 large main meals get 10% off selected desserts </li>
                                        <li> 10% off for a 3 course meal pp on Wednesday </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container text-center">
                                <h5>Contact Details</h5>
                                <p>Telephone Number:0161 869 0440</p>
                                <h6>Our Address:</h6>
                                <p>Unit G1, The Quays, Manchester, Salford M50 3AG</p>
                                <div>
                                    <h5>Vist Our Website</h5>
                                    <p>For more information about food and the menu</p>
                                </div>
                                <a target="_blank" href="http://www.limeuk.com/">Lime</a>
                            </div>
                        </section>
                    </Card.Body>
                    <Card.Footer>
                        <div className=" container text-center">
                            <small className="text-muted">Last updated 8 months ago</small>
                        </div>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Rouge} alt="Cafe Rouge at Salford Quays"/>
                    <Card.Body>
                        <div className="container text-center">
                            <Card.Title>Café Rouge</Card.Title>
                        </div>
                        <Card.Text> Join us for a taste of culture and good food done right. Whatever the time of day, we have a fine 
                            dish for you to help your cravings. From classic french/parisan food, steak with fries and beef bourguigon. At Cafe Rouge
                            we are a french restaurant with a twist.{' '}
                        </Card.Text>
                        <section>
                            <div className="container text-center">
                                <h5>Offers & Discounts </h5>
                                <p>With our partners QA Cinema we have selected offers and discounts, for customers that have a vaild cinema ticket</p>
                                <div>
                                    <ul>
                                        <li> On Mondays 10% off food and drinks</li>
                                        <li> 2 for 1 specials for brunch </li>
                                        <li> Spend £25 on food and get a dessert for free</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container text-center">
                                <h5>Contact Details</h5>
                                <p>Telephone Number: 0161 549 2173</p>
                                <h6>Our Address:</h6>
                                <p>The Lowry Outlet Mall, Unit G40B, Manchester, Salford M50 3AZ</p>
                                <div>
                                    <h5>Vist Our Website</h5>
                                    <p>For more information</p>
                                </div>
                                <a target="_blank" href="https://www.caferouge.com/bistro-brasserie/manchester/salford-quays">Café Rouge</a>
                            </div>
                        </section>
                    </Card.Body>
                    <Card.Footer>
                        <div className=" container text-center">
                            <small className="text-muted">Last updated 2 weeks ago</small>
                        </div>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Pier} alt="Pier Eight resturant Salford Quays" />
                    <Card.Body>
                        <div className="container text-center">
                            <Card.Title>Pier Eight Restaurant</Card.Title>
                        </div>
                        <Card.Text> Want to indulge in fine dining, well at Pier Eight we server fresh, British food 
                            using seasonal ingredients. It is the perfect bar if you want to enjoy your food whilst looking at the 
                            stunning waterside setting od Salford Quays. 
                    </Card.Text>

                        <section>
                            <div className="container text-center">
                                <h5>Offers & Discounts</h5>
                                <p>QA Cinema customers are entiled for selected discounts which are vaild for a limited amount of time</p>
                                <div>
                                    <ul>
                                        <li> On Thursday 20% off food and drinks </li>
                                        <li> Show-Time Special: Buy 2 drinks get a free starter after 6pm </li>
                                        <li> Pier Special: 10% drinks or 10% food after spending £35 </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container text-center">
                                <h5>Contact Details</h5>
                                <p>Telephone Number: 0161 876 2121 </p>
                                <h6>Our Address:</h6>
                                <p>Inside The Lowry, Manchester, Salford M50 3AZ</p>
                                <div>
                                    <h5>Vist Our Website</h5>
                                    <p>For more information</p>
                                </div>
                                <a target="_blank" href="http://www.piereightrestaurant.co.uk/">Pier Eight restaurant</a>
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
export default Food;