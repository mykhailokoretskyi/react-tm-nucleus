import React from 'react';
import EmailInput from '../emailInput';
import renderer from 'react-test-renderer';

describe('TextInput', () => {
    it('mocks match snapshots', () => {
        const component = renderer.create(
            <EmailInput value="" placeholder="enter rhee..." />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with value matches snapshot', () => {
        const component = renderer.create(
            <EmailInput value="2sdf" required={true} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
