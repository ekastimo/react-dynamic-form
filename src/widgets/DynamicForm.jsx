import React from 'react';

export default class DynamicForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {

    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="panel panel-default " style={{
                margin: 0,
                height: '100%',
                width: '100%'
            }}>
                <div className="panel-body">
                    <h1>Hello I am a dynamic Form</h1>
                </div>
            </div>

        );
    }
}