'use strict';
import General from "./General";
import TopBar from "./TopBar";
import Public from "./Public";

const GettingThere = () => {
    return (
        <div className="container mainContent">
            <h1 className="display-4">Getting There</h1>
            <br></br>
            {/* <TopBar/> */}
            <General />
            <Public />

        </div>
    )
}

export default GettingThere;