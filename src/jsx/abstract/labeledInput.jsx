'use strict';

import React from 'react';
import Input from '../input';
import InputWrapper from './inputWrapper';

export default class LabeledInput extends InputWrapper {
    constructor(props){
        super(props);
    }

    static propTypes = {
        id:             React.PropTypes.string,
        label:          React.PropTypes.string,
        required:       React.PropTypes.bool
    };

    static defaultProps = {
        id:             '',
        label:          '',
        required:       false
    };

    render(){
        const {label,...other} = this.props;
        const labelHTML = `${label} ` + (this.props.required ? `<span class="input-group__required">*</span>`:'');

        return(
            <div className="input-group">
                <Input {...other} ref="input" />
                <label htmlFor={this.props.id} className="input-group__label" dangerouslySetInnerHTML={{__html: labelHTML}} />
            </div>
        );
    }
}
