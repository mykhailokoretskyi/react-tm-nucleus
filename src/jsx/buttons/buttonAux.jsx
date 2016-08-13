'use strict';

import React from 'react';
import ButtonWrapper from '../abstract/buttonWrapper';
import Button from './button';

export default class ButtonAux extends ButtonWrapper {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Button {...this.props} type="buttonAux" ref="button">
                { this.props.children }
            </Button>
        );
    }
}
