
import { Card, CardDeck } from 'react-bootstrap';
import Race from "../../resources/PlacesToGo-img/Race.jpg";
import ManU from "../../resources/PlacesToGo-img/ManU.jpg";
import ice from "../../resources/PlacesToGo-img/ice.jpg";

const Active =()=>{

        return (
            <>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Race} alt="TeamSport Go-Karting Salford/Trafford Area" />
                        <Card.Body>
                            <div className="container text-center">
                                <Card.Title>TeamSport Go-Karting</Card.Title>
                            </div>
                            <Card.Text>
                                If you are in need for a fast pace enviroment in a small space. Well at TeamSport we offer a track to show off your racing skills. 
                                Just 10-15 minutes from Salford Quays docks you can put your foot to the metal to fuel your adrenaline and competitve edge. 
                        </Card.Text>
                            <section>
                                <div className="container text-center">
                                    <h5>Offers & Discounts</h5>
                                    <p>Partnering with QA Cinema we have selected offers for customers that have a vaild cinema ticket</p>
                                    <div>
                                        <ul>
                                            <li> Children over the age of 12 race free on Wednesday</li>
                                            <li> 50 laps for £24pp when you buy an action film </li>
                                            <li> 15% off on Fridays</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
    
                            <section>
                                <div className="container text-center">
                                    <h5>Contact Details</h5>
                                    <p>Telephone Number:01252 732300</p>
                                    <h6>Our Address:</h6>
                                    <p>4, Wharfside Way, Trafford Park, Manchester M17 1NF</p>
                                    <div>
                                        <h5>Vist Our Website</h5>
                                        <p>For more information and to book a ticket</p>
                                    </div>
                                    <a target="_blank" href="https://www.team-sport.co.uk/go-karting-manchester-trafford/?utm_source=Google&utm_medium=Local">TeamSport Go-Karting</a>
                                </div>
                            </section>
                        </Card.Body>
                        <Card.Footer>
                            <div className=" container text-center">
                                <small className="text-muted">Last updated 4 months ago</small>
                            </div>
                        </Card.Footer>
                    </Card>
    
                    <Card>
                        <Card.Img variant="top" src={ice} alt="Ice Skating arena for Manchester Ice Rink" />
                        <Card.Body>
                            <div className="container text-center">
                                <Card.Title>Manchester Ice Rink </Card.Title>
                            </div>
                            <Card.Text> Whatever the weather or season, enjoy skating at our ice rink offering a fun atmosphere for family,
                                friends and couples. We have fun 25 minute classes to teach customers from all ages to learn how to skate. {' '}
                            </Card.Text>
                            <section>
                                <div className="container text-center">
                                    <h5>Offers & Discounts </h5>
                                    <p>With our partners QA Cinema we have selected offers and discounts, for customers that have a vaild cinema ticket</p>
                                    <div>
                                        <ul>
                                            <li> Kids skate free on Tuesdays</li>
                                            <li> Buy 2 tickets get 1 free </li>
                                            <li> 10% off during national holidays</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
    
                            <section>
                                <div className="container text-center">
                                    <h5>Contact Details</h5>
                                    <p>Telephone Number: 0161 820 9718</p>
                                    <h6>Our Address:</h6>
                                    <p>MediaCityUK Side of Orange Building, Salford, Manchester M50 2HE</p>
                                    <div>
                                        <h5>Vist Our Website</h5>
                                        <p>For more information about us and to book place</p>
                                    </div>
                                    <a target="_blank" href="http://www.manchestericerink.co.uk/">Manchester Ice Rink</a>
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
                        <Card.Img variant="top" src={ManU} alt="Manchester United Stadium Tour" />
                        <Card.Body>
                            <div className="container text-center">
                                <Card.Title>Manchester United Museum & Stadium Tour</Card.Title>
                            </div>
                            <Card.Text> 
                                Experience the magic of the "Theatre Of Dreams". Have an up close stadium and museum tour of Old Trafford by visting the 
                                trophy room, stand in the manager spot in the dug out and sit in the Home changing room at your favourite player peg. You can 
                                also vist the legends section to watch mini films about the clubs history and the legendary players that have played for 
                                Manchester United. 
                        </Card.Text>
    
                            <section>
                                <div className="container text-center">
                                    <h5>Offers & Discounts</h5>
                                    <p>QA Cinema customers are entiled for selected discounts which are vaild for a limited amount of time</p>
                                    <div>
                                        <ul>
                                            <li> 15% off when you buy products from the Museum </li>
                                            <li> 20% off the Manchester United store </li>
                                            <li> A chance to sign up for a club membership and season ticket</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
    
                            <section>
                                <div className="container text-center">
                                    <h5>Contact Details</h5>
                                    <p>Telephone Number: 0161 676 7770</p>
                                    <h6>Our Address:</h6>
                                    <p>Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA</p>
                                    <div>
                                        <h5>Vist Our Website</h5>
                                        <p>For more information</p>
                                    </div>
                                    <a target="_blank" href="http://www.manutd.com/en/Visit-Old-Trafford.aspx">Manchester United Museum & Stadium Tour</a>
                                </div>
                            </section>
    
                        </Card.Body>
                        <Card.Footer>
                            <div className=" container text-center">
                                <small className="text-muted">Last updated 07/01/2021</small>
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
    
export default Active;