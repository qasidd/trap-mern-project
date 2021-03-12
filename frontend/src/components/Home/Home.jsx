'use strict';
import logo from '../../resources/img/logo.jpg';

const Home = () => {
    return (
        <div className="container mainContent">
            {/* <h1 className="display-4 mb-4"> Welcome to QA Cinemas! </h1> */}
            <div className="text-center mb-3">
                <img src={logo} alt="logo" className="mb-2" />
                <h2><em>Redefining the cinema experience</em></h2>
            </div>
            <p>This is the homepage for QA cinemas. The site is deigned to present information about
                movies, listings, upcoming releases, etc</p>
            <p>The purpose of this site is to act as a  full-stack Web application suitable for QA
            cinemas specification, with utilisation of supporting tools, methodologies and
                technologies that encapsulate all modules covered during our training.</p>
        </div>

    );

}

export default Home;