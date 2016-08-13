'use strict';

import React from 'react';
import Select from './select';

export default class Dropdown extends React.Component {
    constructor(props){
        super(props);

    }

    static propTypes = {
        id:                 React.PropTypes.string,
        label:              React.PropTypes.string,
        icon:               React.PropTypes.string,
        required:           React.PropTypes.bool
    };

    static defaultProps = {
        id:                 '',
        label:              '',
        icon:               '',
        required:           false
    };

    value(v){
        return this.refs.select.value(v);
    }

    required(v){
        return this.refs.select.required(v);
    }

    multiple(v){
        return this.refs.select.multiple(v);
    }

    render(){
        const { label, icon, ...other } = this.props;
        const labelHTML = label + ((this.refs.select ? this.refs.select.required() : this.props.required) ? `&nbsp;<span class="input-group__required">*</span>` : '');

        return (
            <div className="input-group dropdown">
                <Select {...other} ref="select" >
                    { this.props.children }
                </Select>
                <label htmlFor={other.id} className="input-group__label" dangerouslySetInnerHTML={{__html: labelHTML}} />
                <svg className="dropdown__icon-chevron" dangerouslySetInnerHTML={{__html: icon}} />
            </div>
        );
    }
}
