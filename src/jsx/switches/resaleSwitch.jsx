'use strict';

import React from 'react';
import Switch from './switch';

export default class ResaleSwitch extends React.Component {
    constructor(props){
        super(props);
    }

    value(){
        return this.refs.switch.value();
    }

    toggle(){
        return this.refs.switch.toggle();
    }

    render(){
        return(
            <Switch {...this.props} type="resale" ref="switch">
                { this.props.children }
            </Switch>
        );
    }
}
