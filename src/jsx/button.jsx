'use strict';

import React from 'react';
import _ from 'lodash';
import CallbackBase from './abstract/callbackBase';

export default class Button extends CallbackBase {
    constructor(props){
        super(props);

        this.state = {
            disabled: props.disabled
        }
    }

    static buttonTypes = {
        button:                 "button"
    };

    static propTypes = {
        button:             React.PropTypes.bool,
        disabled:           React.PropTypes.bool,
        type:               React.PropTypes.oneOf(_.keys(Button.buttonTypes))
    };

    static defaultProps = {
        button:             false,
        disabled:           false,
        type:               'button'
    };

    _onClick(e){
        e.preventDefault();
        super._onClick(e);
    }

    filterProps(props){
        const {
            button,
            disabled,
            type,
            ...other
        } = props;
        return super.filterProps(other);
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

    render(){
        const props = this.filterProps(this.props);

        if (this.props.disabled) {
            props.disabled = this.state.disabled;
        }
        props.className = Button.buttonTypes[this.props.type];

        if (this.props.button) {
            return (
                <button {...props} >
                    { this.props.children }
                </button>
            );
        } else {
            return (
                <a href="#" {...props} >
                    { this.props.children }
                </a>
            );
        }
    }
}
