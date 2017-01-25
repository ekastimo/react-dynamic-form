import React from "react";
import {render} from "react-dom";
import TestApp from "./TestApp.jsx"
class Index extends React.Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
            }}>
                <TestApp/>
            </div>
        )
    }
}
render(<Index/>, document.getElementById('content'));