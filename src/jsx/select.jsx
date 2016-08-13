'use strict';

import React from 'react';
import CallbackBase from './abstract/callbackBase';

export default class Select extends CallbackBase {
    constructor(props){
        super(props);

        this.state = {
            multiple:   props.multiple,
            value:      props.defaultValue,
            required:   props.required
        };

        this._onChange = this._onChange.bind(this);
    }

    static propTypes = {
        multiple:           React.PropTypes.bool,
        defaultValue:       React.PropTypes.oneOfType([
                                React.PropTypes.arrayOf(
                                    React.PropTypes.string
                                ),
                                React.PropTypes.string
                            ]),
        required:           React.PropTypes.bool,
        changeCallback:     React.PropTypes.func
    };

    static defaultProps = {
        multiple:               false,
        defaultValue:           '',
        required:               false,
        changeCallback:         function(){}
    };

    componentDidUpdate(prevProps, prevState){
        this.props.changeCallback();
    }

    _onChange(e){
        this.setState({
            value: e.target.value
        });
    }

    value(v){
        if (typeof v === 'undefined'){
            return this.state.value;
        } else {
            if (this.state.multiple){
                this.setState({
                    value: (typeof v === typeof []) ? v : [ v ]
                });
            } else {
                this.setState({
                    value: v
                });
            }
        }
    }

    required(v){
        if (typeof v === 'undefined'){
            return this.state.required;
        } else {
            this.setState({
                required: v
            });
        }
    }

    multiple(v){
        if (typeof v === 'undefined'){
            return this.state.multiple;
        } else {
            this.setState({
                multiple: v
            });
        }
    }

    filterProps(props) {
        const {
            multiple,
            defaultValue,
            changeCallback,
            ...other
        } = props;

        return super.filterProps(other);
    }

    render(){
        const props = this.filterProps(this.props);

        return (
            <select className="dropdown__select"
                    value={this.state.value}
                    multiple={this.state.multiple}
                    onChange={this._onChange}
                    {...props} >
                { this.props.children }
            </select>
        );
    }
}
