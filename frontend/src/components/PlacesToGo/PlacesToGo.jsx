

import Bars from "./Bars";
import Active from "./Active";
import Food from "./Food";


const PlacesToGo = () => {
    return (
        <>
            <section>
                <div className="container text-center">
                    <h2>Bars</h2>
                </div>
            </section>
            <br></br>
            <Bars />

            <br></br>
            <section>
                <div className="container text-center">
                    <h2>Activities</h2>
                </div>
            </section>
            <br></br>
            <Active />

            <br></br>
            <section>
                <div className="container text-center">
                    <h2>Restaurants</h2>
                </div>
            </section>
            <br></br>
            <Food/>
        </>
    );
}

export default PlacesToGo;