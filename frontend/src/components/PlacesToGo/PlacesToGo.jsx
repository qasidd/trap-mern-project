

import Bars from "./Bars";
import Active from "./Active";
import Food from "./Food";


const PlacesToGo = () => {
    return (
        <div className="container mainContent">
            <h1 className="display-4">Places To Go</h1>
            <section>
                <div className="text-center">
                    <h2>Bars</h2>
                </div>
            </section>
            <br></br>
            <Bars />

            <br></br>
            <section>
                <div className="text-center">
                    <h2>Activities</h2>
                </div>
            </section>
            <br></br>
            <Active />

            <br></br>
            <section>
                <div className="text-center">
                    <h2>Restaurants</h2>
                </div>
            </section>
            <br></br>
            <Food/>
        </div>
    );
}

export default PlacesToGo;