import React from 'react';
import Button from '../button';
import ButtonCTA from '../buttonCTA';
import ButtonStatic from '../buttonStatic';
import renderer from 'react-test-renderer';

describe('Button', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <Button>
                Test button
            </Button>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <Button button={true}>
                Test button
            </Button>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <Button disabled={true}>
                Test button
            </Button>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonCTA', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonCTA>
                Test button
            </ButtonCTA>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonCTA button={true}>
                Test button
            </ButtonCTA>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonCTA disabled={true}>
                Test button
            </ButtonCTA>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonStatic', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonStatic>
                Test button
            </ButtonStatic>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonStatic button={true}>
                Test button
            </ButtonStatic>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonStatic disabled={true}>
                Test button
            </ButtonStatic>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
