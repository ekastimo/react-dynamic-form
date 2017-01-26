import React from "react";
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import DynamicForm from "../widgets/DynamicForm.jsx"
import DATA from "./DataCache.jsx"
export default class TestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formConfig: DATA.formConfig,
        };
        this.boundForm = undefined;
        console.log("Creted Test App");
    }

    createButtons() {
        return [
            <button type="button" className="btn btn-default btn-sm" key="refresh"
                    onClick={this.onSetDataClicked.bind(this)}>
                <span className="glyphicon glyphicon-refresh"/>
                &nbsp;SetData
            </button>
        ]
    }

    onSetDataClicked() {
        console.log("Refresh Clicked...");
        //TODO Fetch new Data from server or whatever
        let id = Math.floor((Math.random() * 1000) + 1);
        let data = {
            id: id,
            username: "newName",
            level: "staff",
            creator: "Foo barz",
            creationDate: "2017-01-26"
        };
        this.boundForm.setData(data);
    }

    onGetDataClicked() {
        let data = this.boundForm.getData();
        if (data) {
            console.log("Data>>>", data);
        } else {
            console.log("Data Contains Errors...");
        }
    }

    onSaveClicked() {
        console.log("SAve Clicked...");
        let data = this.boundForm.getData();
        if (data) {
            console.log("Data>>>", data);
        } else {
            console.log("Data Contains Errors...");
        }
    }


    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                padding: 5,
            }}>
                {this.createButtons()}
                <br/><br/>
                <DynamicForm
                    config={this.state.formConfig}
                    controls={
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-redo"/>&nbsp;Cancel
                        </button>
                    }
                    ref={(form) => {
                        this.boundForm = form;
                    }}
                    onSaveClicked={this.onSaveClicked.bind(this)}
                />
            </div>
        )
    }
}