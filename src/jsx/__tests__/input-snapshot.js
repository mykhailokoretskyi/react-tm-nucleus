import React from 'react';
import Input from '../input';
import renderer from 'react-test-renderer';

describe('Input', () => {
    it('mocks match snapshots', () => {
        const component = renderer.create(
            <Input type="text" placeholder="enter here..." />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
