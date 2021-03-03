'use strict';

import {
    Row,
    Col
} from 'reactstrap';

const ClassificationsRatingTab = ({ imgSrc, imgAlt, title, lead, desc }) => {

    return (
        <Row className="mt-4">
            <Col md="3">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="img-fluid"
                />
            </Col>
            <Col md="9">
                <h4>{title}</h4>
                <p class="lead">{lead}</p>
                {desc}
            </Col>
        </Row>
    );
}

export default ClassificationsRatingTab;