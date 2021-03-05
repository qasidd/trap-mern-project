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
                <p>Tram Directions from the city center</p>
                <p>Blue line or Orange line link towards media city uk and eccles</p>
                <p>From Deansgate/Castlefield it's a 15 minute tramp ride with 5 stops until you get to the Anchorage tram station</p>
                <p>From the station it's a 5-10 minute walk to the cinema </p>
                <p>Other Routes: Please exchange at cornbrook, if you are coming from East Didsbury, Trafford, Altricham and Chorlton</p>
            </Card>
            <br></br>
            
            <Card>
                <h6>Bus Directions:</h6>
                <p>From the piccadilly center, take the bus 33 toward worsely </p>
                <p>A 25 minute bus ride to the bus stop on Howard Street, then a 0.4 walk to reach the cinema</p>
                <p>Other buses that travel here: 33, 29, 79, 53 and 50 </p>
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