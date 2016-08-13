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
import TestUtils from 'react-addons-test-utils';

describe('Button "a"', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <Button
                   disabled={false}
                   clickCallback={click}
                   focusCallback={focus}
                   blurCallback={blur}
                   mouseEnterCallback={enter}
                   mouseLeaveCallback={leave}/>
        );
    });

    it('triggers mouse enter callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.mouseEnter(element);
        expect(enter).toBeCalled();
    });
    it('triggers mouse leave callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.mouseLeave(element);
        expect(leave).toBeCalled();
    });
    it('triggers focus callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.focus(element);
        expect(focus).toBeCalled();
    });
    it('triggers blur callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.blur(element);
        expect(blur).toBeCalled();
    });
    it('triggers click callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.click(element);
        expect(click).toBeCalled();
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('Button "button"', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <Button
                button={true}
                disabled={false}
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}/>
        );
    });

    it('triggers mouse enter callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.mouseEnter(element);
        expect(enter).toBeCalled();
    });
    it('triggers mouse leave callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.mouseLeave(element);
        expect(leave).toBeCalled();
    });
    it('triggers focus callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.focus(element);
        expect(focus).toBeCalled();
    });
    it('triggers blur callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.blur(element);
        expect(blur).toBeCalled();
    });
    it('triggers click callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.click(element);
        expect(click).toBeCalled();
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonCTA', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonCTA
                disabled={false}
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Test</ButtonCTA>
        );
    });

    it('triggers mouse enter callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.mouseEnter(element);
        expect(enter).toBeCalled();
    });
    it('triggers mouse leave callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.mouseLeave(element);
        expect(leave).toBeCalled();
    });
    it('triggers focus callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.focus(element);
        expect(focus).toBeCalled();
    });
    it('triggers blur callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.blur(element);
        expect(blur).toBeCalled();
    });
    it('triggers click callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'a');
        TestUtils.Simulate.click(element);
        expect(click).toBeCalled();
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonCTA "button"', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonCTA
                button={true}
                disabled={false}
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}/>
        );
    });

    it('triggers mouse enter callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.mouseEnter(element);
        expect(enter).toBeCalled();
    });
    it('triggers mouse leave callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.mouseLeave(element);
        expect(leave).toBeCalled();
    });
    it('triggers focus callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.focus(element);
        expect(focus).toBeCalled();
    });
    it('triggers blur callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.blur(element);
        expect(blur).toBeCalled();
    });
    it('triggers click callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'button');
        TestUtils.Simulate.click(element);
        expect(click).toBeCalled();
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonStatic', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonStatic
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonStatic>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonFull', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonFull
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonFull>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonAux', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonAux
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonAux>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonAuxSecondary', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonAuxSecondary
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonAuxSecondary>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonAuxFull', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonAuxFull
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonAuxFull>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonAuxMinor', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonAuxMinor
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonAuxMinor>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonOutlined', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonOutlined
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonOutlined>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonOutlinedStatic', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonOutlinedStatic
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonOutlinedStatic>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('ButtonOutlinedFull', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ButtonOutlinedFull
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</ButtonOutlinedFull>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});

describe('Unbutton', () => {

    var input, enter, leave, focus, blur, click;

    beforeEach(function(){
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <Unbutton
                clickCallback={click}
                focusCallback={focus}
                blurCallback={blur}
                mouseEnterCallback={enter}
                mouseLeaveCallback={leave}>Title</Unbutton>
        );
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });
});
