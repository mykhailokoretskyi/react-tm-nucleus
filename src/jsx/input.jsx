'use strict';

import React from 'react';
import _ from 'lodash';
import BaseInput from './abstract/baseInput';

export default class Input extends BaseInput {
    constructor(props){
        super(props);

        this.state = _.pick(props, BaseInput.STATE_PROPERTIES);

        this._onBlur = this._onBlur.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
    }

    static propTypes = {
        type:                           React.PropTypes.oneOf(BaseInput.INPUT_TYPES),
        value:                          React.PropTypes.string,
        checked:                        React.PropTypes.bool,
        disabled:                       React.PropTypes.bool,
        required:                       React.PropTypes.bool,
        changeCallback:                 React.PropTypes.func,
        clickCallback:                  React.PropTypes.func,
        focusCallback:                  React.PropTypes.func,
        blurCallback:                   React.PropTypes.func,
        mouseEnterCallback:             React.PropTypes.func,
        mouseLeaveCallback:             React.PropTypes.func
    };

    static defaultProps = {
        type:                           BaseInput.DEFAULT_TYPE,
        value:                          "",
        checked:                        false,
        disabled:                       false,
        required:                       false,
        changeCallback:                 function(){},
        clickCallback:                  function(){},
        focusCallback:                  function(){},
        blurCallback:                   function(){},
        mouseEnterCallback:             function(){},
        mouseLeaveCallback:             function(){}
    };

    staticProps = _.concat(
        BaseInput.STATE_PROPERTIES,
        "changeCallback",
        "clickCallback",
        "focusCallback",
        "blurCallback",
        "mouseEnterCallback",
        "mouseLeaveCallback"
    );

    componentDidUpdate(prevProps, prevState){
        this.props.changeCallback();
    }

    shouldComponentUpdate(nextProps, nextState){
        return  this.state.value !== nextState.value ||
                this.state.checked !== nextState.checked ||
                this.state.disabled !== nextState.disabled ||
                this.state.required !== nextState.required;
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
        const target = e.currentTarget ? e.currentTarget : e.target;
        this.setState({
            value: target.value,
            checked: target.checked
        });
    }

    _onFocus(e){
        this.props.focusCallback();
    }

    _onBlur(e){
        this.props.blurCallback();
    }

    _onMouseEnter(e){
        this.props.mouseEnterCallback();
    }

    _onMouseLeave(e){
        this.props.mouseLeaveCallback();
    }

    _onClick(e){
        this.props.clickCallback();
    }

    render(){
        const props = this.filterStaticProps(this.props);
        return(
            <input {...props}
                   type={this.state.type}
                   value={this.state.value}
                   checked={this.state.checked}
                   disabled={this.state.disabled}
                   required={this.state.required}
                   onClick={this._onClick}
                   onBlur={this._onBlur}
                   onFocus={this._onFocus}
                   onMouseEnter={this._onMouseEnter}
                   onMouseLeave={this._onMouseLeave}
                   onChange={this._onChange} />
        );
    }
}
