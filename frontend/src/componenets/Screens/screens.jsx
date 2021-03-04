import { Card,CardBody,CardTitle,CardFooter,CardText,CardImg } from 'reactstrap';
import Standardseatingplan from '../../resources/Standardscreenseatingplan.png'
import Standarddecor from '../../resources/Standard screen decor.jpg'
import Deluxeseatingplan from '../../resources/deluxe screen seating plan.png'
import Deluxedecor from '../../resources/deluxe screen decor.jpg'
const Screens = () => {
    return (
        
        <div>
            <Card>
                <CardImg variant="top" src={Standardseatingplan} width="500" length="600" />
                <CardBody>
                    <div className="container text-center">
                        <CardTitle>Seating plan for Standard screen</CardTitle>
                    </div>
                    <CardText>
                        Here you can see a layout of our Standard viewing Screens
                    </CardText>
                </CardBody>
                <CardFooter>
                    <div className=" container text-center">
                        <small className="text-muted">Last updated 6 months ago</small>
                    </div>
                </CardFooter>
            </Card>

            <Card>
                <CardImg variant="top" src={Standarddecor} width="500" length="600"/>
                <CardBody>
                    <div className="container text-center">
                        <CardTitle>Interior of our Standard Screens</CardTitle>
                    </div>
                    <CardText>Here you can see the interior of our Standard viewing screens. {' '}
                    </CardText>
                    
                </CardBody>
                <CardFooter>
                    <div className=" container text-center">
                        <small className="text-muted">Last updated 1 month ago</small>
                    </div>
                </CardFooter>
            </Card>

            <Card>
                <CardImg variant="top" src={Deluxeseatingplan}width="500" length="600" />
                <CardBody>
                    <div className="container text-center">
                        <CardTitle>The Seating plan for our Deluxe Directors Box seats</CardTitle>
                    </div>
                    <CardText> Here you can see the seating plan for our premier Directors Box Seats
                    </CardText>
                </CardBody>
                <CardFooter>
                    <div className=" container text-center">
                        <small className="text-muted">Last updated 27/08/2020</small>
                    </div>
                </CardFooter>
            </Card>
            <Card>
                <CardImg variant="top" src={Deluxedecor} width="500" length="600"/>
                <CardBody>
                    <div className="container text-center">
                        <CardTitle>The Interior for our Deluxe Directors Box seats</CardTitle>
                    </div>
                    <CardText> Here you can see the Layout and decor of our premier Directors Box Seats
                    </CardText>
                </CardBody>
                <CardFooter>
                    <div className=" container text-center">
                        <small className="text-muted">Last updated 27/08/2020</small>
                    </div>
                </CardFooter>
            </Card>
      
        </div>
    )


}

export default Screens;