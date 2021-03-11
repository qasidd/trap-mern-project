import { BASE_URL } from '../CONSTS.json';

const About = () => {
    return (
        <div className="container mainContent">
            <h1 className="display-4">About</h1>
            <h2 className="mb-3">The Team:</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <h3> Ayesha Raja</h3>
                    <p>Email: ayesha.raja@qa.com </p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h3> Daniel Ahuchogu </h3>
                    <p>Email: daniel.ahuchogu@qa.com </p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h3> Hamza Pervez </h3>
                    <p>Email: hamza.pervez@qa.com </p>
                </div>
                <div className="col-md-6">
                    <h3> Siddartha Gurung </h3>
                    <p>Email: siddartha.gurung@qa.com </p>
                </div>
                <div className="col-md-6">
                    <h3> Waleed Tahir </h3>
                    <p>Email: waleed.tahir@qa.com </p>
                </div>
            </div>
            <p>Want to contact us? <a href={`${BASE_URL}/contactus`} target="_blank">Click here</a></p>
        </div>

    );

}

export default About;