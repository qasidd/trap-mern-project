// content references:
// https://www.bbfc.co.uk/
// https://www.madeformums.com/school-and-family/film-classifications-what-they-mean/

import React, { useState } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import classnames from 'classnames';
import UniSymbol from '../../resources/img/uni-symbol.png';
import PgSymbol from '../../resources/img/pg-symbol.png';
import TwelveSymbol from '../../resources/img/12-symbol.png';
import FifteenSymbol from '../../resources/img/15-symbol.png';
import EighteenSymbol from '../../resources/img/18-symbol.png';
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
            <h5><em>Dangerous behaviour</em></h5>
            <p>No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of
                realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.</p>
            <h5><em>Discrimination</em></h5>
            <p>Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive
                discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.</p>
            <h5><em>Drugs</em></h5>
            <p>Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</p>
            <h5><em>Language</em></h5>
            <p>There may be moderate bad language. Strong language may be permitted, depending on the manner in which
            it is used, who is using the language, its frequency within the work as a whole and any special
                contextual justification.</p>
            <h5><em>Nudity</em></h5>
            <p>There may be nudity, but in a sexual context it must be brief and discreet.</p>
            <h5><em>Sex</em></h5>
            <p>Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but
                frequent crude references are unlikely to be acceptable.</p>
            <h5><em>Threat and horror</em></h5>
            <p>There may be moderate physical and psychological threat and horror sequences. Although some scenes
                may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.</p>
            <h5><em>Violence</em></h5>
            <p>There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries
                or blood, but occasional gory moments may be permitted if justified by the context.</p>
        </>
    )

    const FifteenDesc = (
        <>
            <h5><em>Dangerous behaviour</em></h5>
            <p>Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail
            which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on
                factors such as realism, context and setting.</p>
            <h5><em>Discrimination</em></h5>
            <p>The work as a whole must not endorse discriminatory language or behaviour, although there may be racist,
                homophobic or other discriminatory themes and language.</p>
            <h5><em>Drugs</em></h5>
            <p>Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example,
            through detailed instruction). The misuse of easily accessible and highly dangerous substances (for
                example, aerosols or solvents) is unlikely to be acceptable.</p>
            <h5><em>Language</em></h5>
            <p>There may be strong language. Very strong language may be permitted, depending on the manner in which it
            is used, who is using the language, its frequency within the work as a whole and any special contextual
                justification.</p>
            <h5><em>Nudity</em></h5>
            <p>There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted
                but strong detail is likely to be brief or presented in a comic context.</p>
            <h5><em>Sex</em></h5>
            <p>Sexual activity may be portrayed, but usually without strong detail. There may be strong verbal references
            to sexual behaviour. Repeated very strong references, particularly those using pornographic language, are
                unlikely to be acceptable. Works whose primary purpose is sexual arousal are unacceptable.</p>
            <h5><em>Sexual Violence and sexual threat</em></h5>
            <p>There may be strong verbal references to sexual violence but any depiction of the stronger forms of
            sexual violence, including rape, must not be detailed or prolonged. A strong and sustained focus on
                sexual threat is unacceptable.</p>
            <h5><em>Threat and horror</em></h5>
            <p>There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be
                acceptable.</p>
            <h5><em>Violence</em></h5>
            <p>Violence may be strong but should not dwell on the infliction of pain or injury. The strongest gory
                images are unlikely to be acceptable. Strong sadistic violence is also unlikely to be acceptable.</p>
        </>
    )

    const EighteenDesc = (
        <>
            <p>Exceptions are most likely in the following areas:</p>
            <ul>
                <li>where the material is in breach of the criminal law, or has been created through the commission of
                    a criminal offence</li>
                <li>where material or treatment appears to us to risk harm to individuals or, through their behaviour,
                to society. For example, the detailed portrayal of violent or dangerous acts, or of illegal drug
                use, which may cause harm to public health or morals. This may include portrayals of sadistic
                violence, rape or other non-consensual sexually violent behaviour which make this violence look
                appealing; reinforce the suggestion that victims enjoy rape or other non-consensual sexually violent
                behaviour; or which invite viewer complicity in rape, other non-consensual sexually violent behaviour
                    or other harmful violent activities</li>
            </ul>
        </>
    )

    return (
        <main className="mainContent container">
            <h1 className="display-4">Classifications</h1>
            <div className="row">
                <div className="col">
                    <p>Before they are released to the public, all films are given age ratings by the British
                    Board of Film Classification (BBFC). These categorisations are made to help children
                        and families choose what is right for them and what to avoid.</p>
                    <p>There are five main ratings that the BBFC give out: U, PG, 12, 15 and 18.</p>
                    <p><em>*All the information below comes directly from the
                        official <a href="https://www.bbfc.co.uk/" target="_blank" rel="noreferrer">BBFC website</a></em></p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <h2>Ratings</h2>
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
                                lead="Films classified 12A contain material that is not generally suitable for children aged under 12. 
                                No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning 
                                to take a child under 12 to view a 12A film should consider whether the film is suitable for that child."
                                desc={TwelveDesc}
                            />
                        </TabPane>
                        <TabPane tabId="4">
                            <ClassificationsRatingTab
                                imgSrc={FifteenSymbol}
                                imgAlt="Fifteen and over rating symbol"
                                title="15 – Suitable only for 15 years and over"
                                lead="No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may 
                                rent or buy a 15 rated video work."
                                desc={FifteenDesc}
                            />
                        </TabPane>
                        <TabPane tabId="5">
                            <ClassificationsRatingTab
                                imgSrc={EighteenSymbol}
                                imgAlt="Eighteen and over rating symbol"
                                title="18 – Suitable only for adults"
                                lead="No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent 
                                or buy an 18 rated video work. Adults should be free to choose their own entertainment."
                                desc={EighteenDesc}
                            />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </main>
    )
};

export default Classifications;