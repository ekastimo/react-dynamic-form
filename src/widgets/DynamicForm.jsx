import React from 'react';
import FormItem from './FormItem.jsx';
const splitArray = function (arr, split) {
    let currPos = 0;
    let toRet = [];
    while (currPos < arr.length) {
        let sub = [];
        for (let i = 0; i < split; i++) {
            arr[currPos] && sub.push(arr[currPos]);
            currPos++;
        }
        sub.length > 0 && toRet.push(sub);
    }
    return toRet;
};

export default class DynamicForm extends React.Component {
    constructor(props) {
        super(props);
        this.numCols = 3;//Should be divisible by 12 for proper rendering
        this.config = this.props.config;
        this.primaryKey = this.config.primaryKey;
        this.fields = this.config.fields;
        this.items = {};
        this.controlsPosition = props.controlsPosition || 'bottom';
        this.controlsAlign = props.controlsAlign || 'right';
        this.isEditing = false;
    }

    componentWillReceiveProps(props) {

    }
    onSaveButtonClicked() {
        const  items = this.items;
        const data = {};
        for(let key in this.items){
            if (items.hasOwnProperty(key)){
                let item = items[key];
                if(item.hasError()){
                    //For Automatically shows Error Items
                    return;
                }else{
                    data[key] = item.getValue();
                }
            }
        }
        console.log("save",data);
    }


    createControls() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-default" onClick={this.onSaveButtonClicked.bind(this)}>
                    <span className="glyphicon glyphicon-floppy-saved"/>&nbsp;Save
                </button>
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-refresh"/>&nbsp;Clear
                </button>
                {this.props.controls}
            </div>
        );
    }

    render() {
        return (
            <div className="panel panel-default " style={{
                margin: 0,
            }}>
                { this.controlsPosition === 'top' &&
                <div
                    className="panel-heading">{this.createControls()}</div>
                }
                <div className="panel-body">

                    <form role="form">
                        {
                            splitArray(this.fields, this.numCols).map((grp) => {
                                const width = 12 / this.numCols;
                                return (
                                    <div key={grp[0].name} className="row">
                                        {grp.map((item) => {
                                            return (
                                                <div key={item.name}
                                                     className={"col-sm-" + width + " col-md-" + width + " col-xs-12"}>
                                                    <FormItem ref={(itm) => {
                                                        this.items[item.name] = itm
                                                    }} config={ item }/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </form>
                </div>
                {   this.controlsPosition === 'bottom' &&
                <div className="panel-footer">{this.createControls()}</div>
                }
            </div>

        );
    }
}