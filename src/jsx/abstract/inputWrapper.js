'use strict';

import React from 'react';

export default class InputWrapper extends React.Component{
    constructor(props){
        super(props);
    }

    value(v){
        return this.refs.input.value(v);
    }

    checked(v){
        return this.refs.input.checked(v);
    }

    required(v){
        return this.refs.input.required(v);
    }

    disabled(v){
        return this.refs.input.disabled(v);
    }

    type(){
        return this.refs.input.type();
    }
}
