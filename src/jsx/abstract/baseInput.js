'use strict';

import React from 'react';
import _ from 'lodash';

export default class BaseInput extends React.Component {
    constructor(props){
        super(props);
    }

    filterStaticProps(props){
        const nonStaticProps = {};
        for (const key of Object.keys(props)){
            if (_.findIndex(this.staticProps, (value) => {return value == key;}) == -1){
                nonStaticProps[key] = props[key];
            }
        }
        return nonStaticProps;
    }

    staticProps = [];

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
        "required"
    ];
}
