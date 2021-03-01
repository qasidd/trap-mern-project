'use strict';

import React, { useState } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';
import classnames from 'classnames';
import UniSymbol from '../resources/img/uni-symbol.png';
import PgSymbol from '../resources/img/pg-symbol.png';
import TwelveSymbol from '../resources/img/12-symbol.png';
import FifteenSymbol from '../resources/img/15-symbol.png';
import EighteenSymbol from '../resources/img/18-symbol.png';
import ClassificationsRatingTab from './ClassificationsRatingTab';

const Classifications = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const UniDesc = (
        <>
            <p>U films should be set within a positive framework and should offer reassuring counterbalances to any
            violence, threat or horror.</p>
            <h5><em>Dangerous behaviour</em></h5>
            <p>Potentially dangerous or anti-social behaviour which young children may copy must be clearly
                disapproved of. No emphasis on realistic or easily accessible weapons.</p>
            <h5><em>Discrimination</em></h5>
            <p>Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of</p>
            <h5><em>Drugs</em></h5>
            <p>References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear
                educational purpose or anti-drug message suitable for young children.</p>
            <h5><em>Language</em></h5>
            <p>Infrequent use only of very mild bad language.</p>
            <h5><em>Nudity</em></h5>
            <p>Occasional nudity, with no sexual context.</p>
            <h5><em>Sex</em></h5>
            <p>Occasional nudity, with no sexual context.</p>
            <h5><em>Threat and horror</em></h5>
            <p>Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to
                young children. The outcome should be reassuring.</p>
            <h5><em>Violence</em></h5>
            <p>Violence will generally be very mild. Mild violence may be acceptable if it is justified by context
                (for example, comedic, animated, wholly unrealistic).</p>
        </>
    )

    const PGDesc = (
        <>
            <h5><em>Dangerous behaviour</em></h5>
            <p>No detail of potentially dangerous behaviour which young children are likely to copy, if that behaviour
            is presented as safe or fun. No glamorisation of realistic or easily accessible weapons such as knives.
                No focus on anti-social behaviour which young children are likely to copy.</p>
            <h5><em>Discrimination</em></h5>
            <p>Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of, or in
            an educational or historical context, or in a particularly dated work with no likely appeal to children.
                Discrimination by a character with whom children can readily identify is unlikely to be acceptable.</p>
            <h5><em>Drugs</em></h5>
            <p>References to illegal drugs or drug misuse must be innocuous or carry a suitable anti-drug message.</p>
            <h5><em>Language</em></h5>
            <p>Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being
                passed at a higher category.</p>
            <h5><em>Nudity</em></h5>
            <p>There may be nudity with no sexual context.</p>
            <h5><em>Sex</em></h5>
            <p>Sexual activity may be implied, but should be discreet and infrequent. Mild sex references and innuendo
                only.</p>
            <h5><em>Threat and horror</em></h5>
            <p>Frightening sequences or situations where characters are in danger should not be prolonged or intense.
                Fantasy settings and comedy may be mitigating factors.</p>
            <h5><em>Violence</em></h5>
            <p>Violence will usually be mild. However there may be moderate violence, without detail, if justified by
                its context (for example, history, comedy or fantasy).</p>
        </>
    )

    const TwelveDesc = (
        <>
        </>
    )

    const FifteenDesc = (
        <>
        </>
    )

    const EighteenDesc = (
        <>
        </>
    )

    return (
        <div className="classifications container">
            <header className="row">
                <div className="col">
                    <h1 className="display-3">Classifications</h1>
                </div>
            </header>
            <div className="row">
                <div className="col">
                    <p>Classification is the process of giving age ratings and content advice to films and
                    other audiovisual content to help children and families choose what’s right for them
                    and avoid what’s not.</p>
                    <p>Recommendations are made by Compliance Officers based on the BBFC’s published
                    Guidelines. These are the result of extensive consultation with people right across
                    the UK, research, and the BBFC’s more than 100 years of experience. They reflect
                    people’s views on film, DVD, Blu-ray, video on demand (VoD) regulation and are
                    regularly updated.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <h2 className="display-4">Ratings</h2>
                    <Nav tabs className="mt-3">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Suitable for all
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Parental guidance
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                                Suitable for 12 years and over
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4'); }}
                            >
                                Suitable only for 15 years and over
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { toggle('5'); }}
                            >
                                Suitable only for adults
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <ClassificationsRatingTab
                                imgSrc={UniSymbol}
                                imgAlt="Universal rating symbol"
                                title="U Universal - Suitable for all"
                                lead="A U film should be suitable for audiences aged four years and over, 
                                although it is impossible to predict what might upset any particular child."
                                desc={UniDesc}
                            />
                        </TabPane>
                        <TabPane tabId="2">
                            <ClassificationsRatingTab
                                imgSrc={PgSymbol}
                                imgAlt="PG rating symbol"
                                title="PG Parental Guidance"
                                lead="General viewing, but some scenes may be unsuitable for young children. A 
                                PG film should not unsettle a child aged around eight or older. Unaccompanied 
                                children of any age may watch, but parents are advised to consider whether the content 
                                may upset younger, or more sensitive, children."
                                desc={PGDesc}
                            />
                        </TabPane>
                        <TabPane tabId="3">
                            <ClassificationsRatingTab
                                imgSrc={TwelveSymbol}
                                imgAlt="Twelve and over rating symbol"
                                title="12 – Suitable for 12 years and over"
                                lead="A U film should be suitable for audiences aged four years and over, 
                                although it is impossible to predict what might upset any particular child."
                                desc={TwelveDesc}
                            />
                        </TabPane>
                        <TabPane tabId="4">
                            <ClassificationsRatingTab
                                imgSrc={FifteenSymbol}
                                imgAlt="Fifteen and over rating symbol"
                                title="15 – Suitable only for 15 years and over"
                                lead="A U film should be suitable for audiences aged four years and over, 
                                although it is impossible to predict what might upset any particular child."
                                desc={FifteenDesc}
                            />
                        </TabPane>
                        <TabPane tabId="5">
                            <ClassificationsRatingTab
                                imgSrc={EighteenSymbol}
                                imgAlt="Eighteen and over rating symbol"
                                title="18 – Suitable only for adults"
                                lead="A U film should be suitable for audiences aged four years and over, 
                                although it is impossible to predict what might upset any particular child."
                                desc={EighteenDesc}
                            />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div >
    )
};

export default Classifications;

// references:
// https://www.bbfc.co.uk/about-classification/classification-guidelines