import React from 'react';
import Switch from '../switch';
import ResaleSwitch from '../resaleSwitch';

import renderer from 'react-test-renderer';

describe('Switch', () => {
    it(' off matches snapshots', () => {
        const component = renderer.create(
            <Switch value={false} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' on matches snapshot', () => {
        const component = renderer.create(
            <Switch value={true} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ResaleSwitch', () => {
    it(' off matches snapshots', () => {
        const component = renderer.create(
            <ResaleSwitch value={false} >[+]</ResaleSwitch>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' on matches snapshot', () => {
        const component = renderer.create(
            <ResaleSwitch value={true} >[+]</ResaleSwitch>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});