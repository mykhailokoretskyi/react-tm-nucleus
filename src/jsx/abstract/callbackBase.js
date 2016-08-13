'use strict';

import React from 'react';

export default class CallbackBase extends React.Component {
    constructor(props){
        super(props);

        this._onClick = this._onClick.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
    }

    static propTypes = {
        clickCallback:                  React.PropTypes.func,
        focusCallback:                  React.PropTypes.func,
        blurCallback:                   React.PropTypes.func,
        mouseEnterCallback:             React.PropTypes.func,
        mouseLeaveCallback:             React.PropTypes.func
    };

    static defaultProps = {
        clickCallback:          function(){},
        focusCallback:          function(){},
        blurCallback:           function(){},
        mouseEnterCallback:     function(){},
        mouseLeaveCallback:     function(){}
    };

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

    filterProps(props){
        const {
            clickCallback,
            focusCallback,
            blurCallback,
            mouseEnterCallback,
            mouseLeaveCallback,
            ...other
        } = props;

        other.onClick = this._onClick;
        other.onFocus = this._onFocus;
        other.onBlur = this._onBlur;
        other.onMouseEnter = this._onMouseEnter;
        other.onMouseLeave = this._onMouseLeave;

        return other;
    }
}
