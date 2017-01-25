import React from "react";
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import DynamicForm from "../widgets/DynamicForm.jsx"
import DATA from "./DataCache.jsx"
export default class TestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableConfig: DATA.tableConfig,
            tableData: [...DATA.tableData]
        };
        this.dataGrid = undefined;
    }

    createButtons() {
        return [
            <button type="button" className="btn btn-default btn-sm" key="refresh"
                    onClick={this.onRefreshClicked.bind(this)}>
                <span className="glyphicon glyphicon-refresh"/>
                &nbsp;Refresh
            </button>,
            <button type="button" className="btn btn-default btn-sm" key="new"
                    onClick={this.onNewClicked.bind(this)}>
                <span className="glyphicon glyphicon-plus"/>
                &nbsp;New
            </button>,
            <button type="button" className="btn btn-default btn-sm" key="edit"
                    onClick={this.onEditClicked.bind(this)}>
                <span className="glyphicon glyphicon-pencil"/>
                &nbsp;Edit
            </button>,
            <button type="button" className="btn btn-default btn-sm" key="delete"
                    onClick={this.onDeleteClicked.bind(this)}>
                <span className="glyphicon glyphicon-trash"/>
                &nbsp;Delete
            </button>
        ]
    }

    onRefreshClicked() {
        console.log("Refresh Clicked...");
        //TODO Fetch new Data from server or whatever
        this.dataGrid.setNewRecords(DATA.tableData);
    }

    onNewClicked() {
        let id = Math.floor((Math.random() * 1000) + 1);
        let data = {id: id, name: "newName" + id, label: "desired" + id, valueField: "Foo barz" + id};
        //TODO Add to server or whatever
        this.dataGrid.addRecord(data);
    }

    onEditClicked() {
        console.log("Edit Clicked");
        const recs = this.dataGrid.getSelectedRecords();
        if (recs.length !== 1) {
            alert("Please select one record to edit");
            return;
        }
        let editedRec = {...recs[0],name: "Edited_newName", label: "Edited_desired"};
        //TODO Delete from server or whatever, do not edit ID
        this.dataGrid.editRecord(editedRec);
    }


    onDeleteClicked() {
        console.log("Delete Clicked..");
        const recs = this.dataGrid.getSelectedRecords();
        if (recs.length !== 1) {
            alert("Please select one record to edit");
            return;
        }
        //TODO Delete from server or whatever
        this.dataGrid.deleteRecord(recs[0]);
    }


    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                padding: 5,
            }}>
                <DynamicForm
                    config={this.state.tableConfig}
                    data={this.state.tableData}
                />
            </div>
        )
    }
}