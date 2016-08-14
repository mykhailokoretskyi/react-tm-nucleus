'use strict';

import React from 'react';
import CallbackBase from '../abstract/callbackBase';

export default class Switch extends CallbackBase {
    constructor(props){
        super(props);

        this.state = {
            value: props.value
        };
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.value != this.state.value){
            this.props.changeCallback();
        }
    }

    static types = [
        "",
        "resale"
    ];

    static propTypes = {
        value:                          React.PropTypes.bool,
        type:                           React.PropTypes.oneOf(Switch.types),
        changeCallback:                 React.PropTypes.func,
        clickCallback:                  React.PropTypes.func,
        focusCallback:                  React.PropTypes.func,
        blurCallback:                   React.PropTypes.func,
        mouseEnterCallback:             React.PropTypes.func,
        mouseLeaveCallback:             React.PropTypes.func
    };

    static defaultProps = {
        value:                  false,
        type:                   "",
        changeCallback:         function(){},
        clickCallback:          function(){},
        focusCallback:          function(){},
        blurCallback:           function(){},
        mouseEnterCallback:     function(){},
        mouseLeaveCallback:     function(){}
    };

    filterProps(props){
        const { value, changeCallback, type, ...other } = props;
        return super.filterProps(other);
    }

    value(){
        return this.state.value;
    }

    toggle(){
        this.setState({
            value: !this.state.value
        });
    }

    _onClick(e){
        this.toggle();
        super._onClick(e);
    }

    render(){
        const props = this.filterProps(this.props);

        const activityClass = "toggle-switch__button--active" + (this.props.type ? `-${this.props.type}` : '');
        const buttonClass = "toggle-switch__button" + (this.state.value ? ` ${activityClass}` : "");
        const indicatorClass = "toggle-switch__indicator" + (this.props.type ? `--${this.props.type}` : '');
        const toggleClass = indicatorClass + " toggle-switch__indicator--" + (this.state.value ? "right" : "left");

        return (
            <button {...props} className={buttonClass}>
                <div className={toggleClass}>
                    { this.props.children }
                </div>
            </button>
        );
    }
}
