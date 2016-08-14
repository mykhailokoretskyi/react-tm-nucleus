'use strict';

import React from 'react';
import CallbackBase from './callbackBase';
import _ from 'lodash';

export default class BaseInput extends CallbackBase {
    constructor(props){
        super(props);
    }

    static INPUT_TYPES = [
        "text",
        "email",
        "number",
        "password",
        "radio",
        "checkbox"
    ];

    static DEFAULT_TYPE = "text";

    static STATE_PROPERTIES = [
        "type",
        "value",
        "checked",
        "disabled",
        "required",
        "error"
    ];

    filterProps(props){
        const {
            type,
            value,
            checked,
            disabled,
            required,
            ...other
        } = props;
        return super.filterProps(other);
    }
}
