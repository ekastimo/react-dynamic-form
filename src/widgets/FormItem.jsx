import React from "react";
import Datetime from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";
const errorStyle = {
    border: '1px solid red'
};
export default class FormItem extends React.Component {
    constructor(props) {
        super(props);
        let value = props.config.value;
        //Simple Hack to Maintain SQL Format for Dates
        if (props.config.type === "datetime") {
            value = value && moment(value).format("YYYY-MM-DD hh:mm:ss");
        } else if (props.config.type === "date") {
            value = value && moment(value).format("YYYY-MM-DD");
        }
        this.state = {
            value: value,
            hasError: false,
        };
        this.isRequired = this.props.config.isRequired
    }

    setValue(value) {
        this.setState({
            value: value,
            hasError: this.hasErrors(value)
        });
    }

    clearValue() {
        this.setState({
            value: "",
            hasError: false
        });
    }

    getValue() {
        return this.state.value;
    }

    hasError() {
        let errors = this.state.hasError;
        if (this.isRequired && !this.state.value) {
            errors = true;
        }
        this.setState({hasError: errors});
        return errors;
    }

    hasErrors(value) {
        if (this.isRequired && !value) {
            return true;
        }
        if (this.props.config.pattern) {
            const re = new RegExp(this.props.config.pattern);
            return value.match(re) == null;
        } else {
            return false;
        }
    }

    onValueChanged(event) {
        let value = event.target.value;
        this.setState({
            value: value,
            hasError: this.hasErrors(value)
        });
        this.props.onChange && this.props.onChange(value);
    }

    onDateValueChanged(date) {
        const dateValue = moment(date).format("YYYY-MM-DD");
        this.setState({
            value: dateValue,
            hasError: this.hasErrors(dateValue)
        });
        this.props.onChange && this.props.onChange(dateValue);
    }

    onDateTimeValueChanged(date) {
        const dateTime = moment(date).format("YYYY-MM-DD hh:mm:ss");
        this.setState({
            value: dateTime,
            hasError: this.hasErrors(dateTime)
        });
        this.props.onChange && this.props.onChange(dateTime);
    }

    render() {
        const config = this.props.config;
        const err = this.state.hasError;
        switch (config.type) {
            case "number":
                return (
                    <div className={"form-group " + (err ? "has-error" : "")}>
                        <label className="control-label" htmlFor={config.name}>{config.title}</label>
                        <input type="number" className="form-control" name={config.name} value={this.state.value}
                               onChange={this.onValueChanged.bind(this)}
                               placeholder={config.placeholder}
                        />
                    </div>
                );
            case "password":
                return (
                    <div className={"form-group " + (err ? "has-error" : "")}>
                        <label className="control-label" htmlFor={config.name}>{config.title}</label>
                        <input type="password" className="form-control" name={config.name} value={this.state.value}
                               onChange={this.onValueChanged.bind(this)}
                               placeholder={config.placeholder}
                        />
                    </div>
                );
            case "checkbox":
                return (
                    <div className="checkbox" style={err ? errorStyle : {}}>
                        <label className="control-label"><input type="checkbox" name={config.name}
                                                                onChange={this.onValueChanged.bind(this)}
                                                                value={this.state.value}

                        />{config.title}</label>
                    </div>
                );
            case "textarea":
                return (
                    <div className={"form-group " + (err ? "has-error" : "")}>
                        <label className="control-label" htmlFor={config.name}>{config.title}</label>
                        <textarea className="form-control" name={config.name} value={this.state.value}
                                  onChange={this.onValueChanged.bind(this)}
                                  placeholder={config.placeholder}
                        />
                    </div>
                );
            case "datetime":
                return (
                    <div className={"form-group " + (err ? "has-error" : "")}>
                        <label className="control-label" htmlFor={config.name}>{config.title}</label>
                        <Datetime name={config.name} value={this.state.value}
                                  onChange={this.onDateTimeValueChanged.bind(this)}
                                  dateFormat="YYYY-MM-DD"
                                  timeFormat="hh:mm:ss"
                                  closeOnSelect={true}
                        />
                        {/* More props, refer to: https://github.com/YouCanBookMe/react-datetime */}
                    </div>
                );
            case "date":
                return (
                    <div className={"form-group " + (err ? "has-error" : "")}>
                        <label className="control-label" htmlFor={config.name}>{config.title}</label>
                        <Datetime name={config.name} value={this.state.value}
                                  onChange={this.onDateValueChanged.bind(this)}
                                  dateFormat="YYYY-MM-DD"
                                  timeFormat={false}
                                  closeOnSelect={true}
                        />
                        {/* More props, refer to https://github.com/YouCanBookMe/react-datetime */}
                    </div>
                );
            case "select":
                return (
                    <div className={"form-group " + (err ? "has-error" : "")}>
                        <label className="control-label" htmlFor={config.name}>{config.title}</label>
                        <select className="form-control selectpicker" name={config.name} value={this.state.value}
                                onChange={this.onValueChanged.bind(this)}
                        >
                            <option value="">Select...</option>
                            {config.data.map((opt) => {
                                return <option key={opt.name} value={opt.name}>{opt.title}</option>
                            })}
                        </select>
                    </div>
                );
            default :
                return (
                    <div className={"form-group " + (err ? "has-error" : "")}>
                        <label className="control-label" htmlFor={config.name}>{config.title}</label>
                        <input type="text" className="form-control" name={config.name} value={this.state.value}
                               onChange={this.onValueChanged.bind(this)}
                               placeholder={config.placeholder}
                        />
                    </div>
                );
        }

    }
}