'use strict';

import React from 'react';
import LabeledInput from './abstract/labeledInput';
import InputWrapper from './abstract/inputWrapper';

export default class TextInput extends InputWrapper {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <LabeledInput {...this.props} type="text" ref="input" />
        );
    }
}
