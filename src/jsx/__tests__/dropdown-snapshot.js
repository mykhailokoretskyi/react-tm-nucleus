import React from 'react';
import Dropdown from '../dropdown';
import renderer from 'react-test-renderer';

describe('Dropdown', () => {
    it('with value matches snapshot', () => {
        const component = renderer.create(
            <Dropdown defaultValue="a" >
                <option value="" />
                <option value="a">A</option>
                <option value="b">B</option>
            </Dropdown>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with label matches snapshot', () => {
        const component = renderer.create(
            <Dropdown label="Choose" icon='<use xlink:href="img/someIcon" />'>
                <option value="" />
                <option value="a">A</option>
                <option value="b">B</option>
            </Dropdown>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('multiple matches snapshot', () => {
        const component = renderer.create(
            <Dropdown label="Choose" multiple={true} required={true} defaultValue={['b']} icon='<use xlink:href="img/someIcon" />'>
                <option value="" />
                <option value="a">A</option>
                <option value="b">B</option>
            </Dropdown>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
