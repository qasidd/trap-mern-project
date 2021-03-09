'use strict';


import General from "./General";
import TopBar from "./TopBar";
import Public from "./Public";



const GettingThere = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="text-center">
                        <h2>Getting There</h2>
                    </div>
                </div>
            </section>
            <br></br>

            {/* <TopBar/> */}
            <General />
             <Public/>
    
        </>
    )
}

export default GettingThere;