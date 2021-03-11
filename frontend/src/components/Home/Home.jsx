'use strict';
import logo from '../../resources/img/logo.jpg';

const Home = () => {
    return (
        <div className="container mainContent">
            <h1 className="display-4"> Welcome to QA Cinemas! </h1>
            <br></br>
            <img src={logo} alt="this is a logo" />
            <h2> Redefining the cinema experience </h2>
            <br></br>
            <p>This is the homepage for QA cinemas. The site is deigned to present information about
                movies, listings, upcoming releases, etc</p>
            <p>The purpose of this site is to act as a  full-stack Web application suitable for QA
            cinemas specification, with utilisation of supporting tools, methodologies and
                technologies that encapsulate all modules covered during our training.</p>
        </div>

    );

}

export default Home;