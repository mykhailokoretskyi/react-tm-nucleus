import React from 'react';
import Button from '../buttons/button';
import ButtonCTA from '../buttons/buttonCTA';
import ButtonStatic from '../buttons/buttonStatic';
import ButtonFull from '../buttons/buttonFull';
import ButtonAux from '../buttons/buttonAux';
import ButtonAuxSecondary from '../buttons/buttonAuxSecondary';
import ButtonAuxFull from '../buttons/buttonAuxFull';
import ButtonAuxMinor from '../buttons/buttonAuxMinor';
import ButtonOutlined from '../buttons/buttonOutlined';
import ButtonOutlinedStatic from '../buttons/buttonOutlinedStatic';
import ButtonOutlinedFull from '../buttons/buttonOutlinedFull';
import Unbutton from '../buttons/unbutton';
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

describe('ButtonFull', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonFull>
                Test button
            </ButtonFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonFull button={true}>
                Test button
            </ButtonFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonFull disabled={true}>
                Test button
            </ButtonFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonAux', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonAux>
                Test button
            </ButtonAux>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonAux button={true}>
                Test button
            </ButtonAux>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonAux disabled={true}>
                Test button
            </ButtonAux>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonAuxSecondary', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonAuxSecondary>
                Test button
            </ButtonAuxSecondary>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonAuxSecondary button={true}>
                Test button
            </ButtonAuxSecondary>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonAuxSecondary disabled={true}>
                Test button
            </ButtonAuxSecondary>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonAuxFull', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonAuxFull>
                Test button
            </ButtonAuxFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonAuxFull button={true}>
                Test button
            </ButtonAuxFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonAuxFull disabled={true}>
                Test button
            </ButtonAuxFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonAuxMinor', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonAuxMinor>
                Test button
            </ButtonAuxMinor>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonAuxMinor button={true}>
                Test button
            </ButtonAuxMinor>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonAuxMinor disabled={true}>
                Test button
            </ButtonAuxMinor>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonOutlined', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonOutlined>
                Test button
            </ButtonOutlined>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonOutlined button={true}>
                Test button
            </ButtonOutlined>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonOutlined disabled={true}>
                Test button
            </ButtonOutlined>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonOutlinedStatic', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonOutlinedStatic>
                Test button
            </ButtonOutlinedStatic>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonOutlinedStatic button={true}>
                Test button
            </ButtonOutlinedStatic>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonOutlinedStatic disabled={true}>
                Test button
            </ButtonOutlinedStatic>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ButtonOutlinedFull', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <ButtonOutlinedFull>
                Test button
            </ButtonOutlinedFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <ButtonOutlinedFull button={true}>
                Test button
            </ButtonOutlinedFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <ButtonOutlinedFull disabled={true}>
                Test button
            </ButtonOutlinedFull>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Unbutton', () => {
    it(' "a" matches snapshots', () => {
        const component = renderer.create(
            <Unbutton>
                Test button
            </Unbutton>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' "button" matches snapshot', () => {
        const component = renderer.create(
            <Unbutton button={true}>
                Test button
            </Unbutton>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' disabled matches snapshots', () => {
        const component = renderer.create(
            <Unbutton disabled={true}>
                Test button
            </Unbutton>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
