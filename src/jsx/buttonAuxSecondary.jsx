'use strict';

import React from 'react';
import ButtonWrapper from './abstract/buttonWrapper';
import Button from './button';

export default class ButtonAuxSecondary extends ButtonWrapper {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Button {...this.props} type="buttonAuxSecondary" ref="button">
                { this.props.children }
            </Button>
        );
    }
}
