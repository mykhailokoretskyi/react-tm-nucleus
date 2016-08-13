'use strict';

import React from 'react';

export default class ButtonWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    disabled(v){
        return this.refs.button.disabled(v);
    }
}
