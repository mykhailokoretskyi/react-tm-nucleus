import React from 'react';
import Input from '../input';
import renderer from 'react-test-renderer';

describe('Input', () => {
    it('mocks match snapshots', () => {
        const component = renderer.create(
            <Input value="" type="text" placeholder="enter here..." />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with value matches snapshot', () => {
        const component = renderer.create(
            <Input value="2sdf" type="text" placeholder="enter here..." />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
