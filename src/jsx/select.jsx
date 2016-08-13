'use strict';

import React from 'react';

export default class Select extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            multiple:   props.multiple,
            value:      props.defaultValue,
            required:   props.required
        };

        this._onBlur = this._onBlur.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
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
        changeCallback:     React.PropTypes.func,
        clickCallback:                  React.PropTypes.func,
        focusCallback:                  React.PropTypes.func,
        blurCallback:                   React.PropTypes.func,
        mouseEnterCallback:             React.PropTypes.func,
        mouseLeaveCallback:             React.PropTypes.func
    };

    static defaultProps = {
        multiple:               false,
        defaultValue:           '',
        required:               false,
        changeCallback:         function(){},
        clickCallback:          function(){},
        focusCallback:          function(){},
        blurCallback:           function(){},
        mouseEnterCallback:     function(){},
        mouseLeaveCallback:     function(){}
    };

    componentDidUpdate(prevProps, prevState){
        this.props.changeCallback();
    }

    _onChange(e){
        this.setState({
            value: e.target.value
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

    render(){
        const {
            multiple,
            defaultValue,
            changeCallback,
            blurCallback,
            focusCallback,
            mouseLeaveCallback,
            mouseEnterCallback,
            clickCallback,
            ...other
        } = this.props;

        return (
            <select className="dropdown__select"
                    value={this.state.value}
                    multiple={this.state.multiple}
                    onChange={this._onChange}
                    onBlur={this._onBlur}
                    onFocus={this._onFocus}
                    onMouseEnter={this._onMouseEnter}
                    onMouseLeave={this._onMouseLeave}
                    onClick={this._onClick}
                    {...other} >
                { this.props.children }
            </select>
        );
    }
}
