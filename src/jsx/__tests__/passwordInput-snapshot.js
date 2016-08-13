import React from 'react';
import PasswordInput from '../passwordInput';
import renderer from 'react-test-renderer';

describe('PasswordInput', () => {
    it('mocks match snapshots', () => {
        const component = renderer.create(
            <PasswordInput value="" placeholder="enter rhee..." />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with value matches snapshot', () => {
        const component = renderer.create(
            <PasswordInput value="2sdf" required={true} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
