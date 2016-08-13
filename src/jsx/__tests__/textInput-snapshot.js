import React from 'react';
import TextInput from '../textInput';
import renderer from 'react-test-renderer';

describe('TextInput', () => {
    it('mocks match snapshots', () => {
        const component = renderer.create(
            <TextInput value="" placeholder="enter rhee..." />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with value matches snapshot', () => {
        const component = renderer.create(
            <TextInput value="2sdf" type="text" required={true} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
