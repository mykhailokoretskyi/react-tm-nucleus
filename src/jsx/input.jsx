'use strict';

import React from 'react';
import _ from 'lodash';
import BaseInput from './abstract/baseInput';

export default class Input extends BaseInput {
    constructor(props){
        super(props);

        this.state = _.pick(props, BaseInput.STATE_PROPERTIES);

        this._onChange = this._onChange.bind(this);
    }

    static propTypes = {
        id:                             React.PropTypes.string,
        type:                           React.PropTypes.oneOf(BaseInput.INPUT_TYPES),
        value:                          React.PropTypes.string,
        checked:                        React.PropTypes.bool,
        disabled:                       React.PropTypes.bool,
        required:                       React.PropTypes.bool,
        changeCallback:                 React.PropTypes.func
    };

    static defaultProps = {
        id:                             "",
        type:                           BaseInput.DEFAULT_TYPE,
        value:                          "",
        checked:                        false,
        disabled:                       false,
        required:                       false,
        changeCallback:                 function(){}
    };

    staticProps = _.concat(
        BaseInput.STATE_PROPERTIES,
        "changeCallback"
    );

    componentDidUpdate(prevProps, prevState){
        if (this.state.value != prevState.value)
            this.props.changeCallback();
    }

    shouldComponentUpdate(nextProps, nextState){
        return  this.state.value != nextState.value ||
                this.state.checked != nextState.checked ||
                this.state.disabled != nextState.disabled ||
                this.state.required != nextState.required;
    }

    value(v){
        if (typeof v !== "undefined"){
            this.setState({
                value: v
            });
        } else {
            return this.state.value;
        }
    }

    checked(v){
        if (typeof v !== "undefined"){
            if (typeof v !== "boolean"){
                throw new Error("Invalid type of value: requires boolean!!!");
            } else {
                this.setState({
                    checked: v
                });
            }
        } else {
            return this.state.checked;
        }
    }

    disabled(v){
        if (typeof v !== "undefined"){
            if (typeof v !== "boolean"){
                throw new Error("Invalid type of value: requires boolean!!!");
            } else {
                this.setState({
                    disabled: v
                });
            }
        } else {
            return this.state.disabled;
        }
    }

    required(v){
        if (typeof v !== "undefined"){
            if (typeof v !== "boolean"){
                throw new Error("Invalid type of value: requires boolean!!!");
            } else {
                this.setState({
                    required: v
                });
            }
        } else {
            return this.state.required;
        }
    }

    type(){
        return this.state.type;
    }

    _onChange(e){
        const target = e.target;
        this.setState({
            value: target.value,
            checked: target.checked
        });
    }

    filterProps(props){
        const {
            changeCallback,
            ...other
        } = props;
        return super.filterProps(other);
    }

    render(){
        const classes = "input-group__text-field " + (this.state.value ? 'has-content' : '');
        const props = this.filterProps(this.props);
        return(
            <input {...props}
                   className={classes}
                   type={this.state.type}
                   value={this.state.value}
                   checked={this.state.checked}
                   disabled={this.state.disabled}
                   required={this.state.required}
                   onChange={this._onChange} />
        );
    }
}
