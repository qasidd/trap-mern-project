import { Card, CardGroup } from 'react-bootstrap';
import { CardBody } from 'reactstrap';



const Public = () => {

    return (
        <>
            <section>
                <Card>
                    <h6>Address 1:</h6>
                    <p>5th Floor Anchorage, 1
                    Anchorage Quay,
                Salford Quays, Manchester, M50 3YJ</p>
                    <h6>Telephone:</h6>
                    <p>01942 527 010</p>
                    <h6>Address 2:</h6>
                    <p>3 Anchorage Quay, Salford, M50 3XL</p>
                </Card>
                <br></br>

                <div>
                    <h4>Public Transport Routes </h4>
                </div>

                <Card>
                    <h6>Tram Directions</h6>
                    <ul>Directions from the city center:
                    <li>Enter the tram from either Piccadilly Station or St Peter Square.</li>
                        <li>Please select the Blue line or Orange line link towards Media City UK or Eccles.</li>
                        <li>25 minute ride from the City Centre to the Anchroage Station.</li>
                        <li>If you are traveling from Deansgate/Castlefield it's a 15 minute tramp ride with 5 stops until you get to the Anchorage tram station.</li>
                        <li>For Other Routes: Please exchange at Cornbrook Station, if you are traveling from East Didsbury, Trafford, Altrincham or Chorlton to select the correct line.</li>
                    </ul>
                </Card>
                <br></br>

                <Card>
                    <h6>Bus Directions:</h6>
                    <ul> Bus Routes from the City Centre:
                        <li>Take the bus 33 toward Worsely</li>
                        <li>A 25 minute bus ride to the stop on Howard Street, then a 5-10 minute walk to reach the cinema.</li>
                        <li>Other buses that travel here: 33, 29, 79, 53 and 50.</li>
                    </ul>
                </Card>
                <br></br>
                
                <Card>
                    <h5>Car Park Details</h5>
                    <h6>Parking Center Address:</h6>
                    <p>Anchorage, Anchorage Quay, Salford, Quays M50 3XE</p>
                    <p>10 minute walk from the cinema</p>
                    <p>There's no car parking for delegates, the nearest carpark is U Swim Carpark.
                    However there's 10 spaces for permanent staff,
                    call 01613932270 and ask for Hannah who would be happy to assist.</p>
                </Card>
            </section>
        </>
    );


}
export default Public;