import React from 'react';
import Button from '../button';
import ButtonCTA from '../buttonCTA';
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
