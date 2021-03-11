import { BASE_URL } from '../CONSTS.json';

const FooterComponent = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>QA Cinemas</h3>
                        <p id="copyrightMessage"><span>&#169;</span> All Rights Reserved</p>
                    </div>
                    <div className="col-6 text-right">
                        <a href={`${BASE_URL}/`} className="d-block">Home</a>
                        <a href={`${BASE_URL}/about`} className="d-block">About Us</a>
                        <a href={`${BASE_URL}/contactus`} className="d-block">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;