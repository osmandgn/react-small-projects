import React from "react";

import "./app.scss";
import Products from "./components/product-card";
import ProgressCard from "./components/progress-bar";

const App = () => {
    return (
        <React.Fragment>
            {/* <Products /> */}
            <ProgressCard/>
        </React.Fragment>
    )
}

export default App;