import React from 'react';
import Switch from '../switch';
import ResaleSwitch from '../resaleSwitch';
import TestUtils from 'react-addons-test-utils';

describe('Switch', () => {

    var input, change, enter, leave, focus, blur, click;

    beforeEach(function(){
        change = jest.genMockFn();
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <Switch changeCallback={change}
                    clickCallback={click}
                    focusCallback={focus}
                    blurCallback={blur}
                    mouseEnterCallback={enter}
                    mouseLeaveCallback={leave}
                value={true}/>
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
        expect(change).toBeCalled();
    });
    it("has accessor for value", () => {
        expect(input.value()).toBe(true);
        input.toggle();
        expect(change).toBeCalled();
        expect(input.value()).toBe(false);
        input.toggle();
        expect(change).toBeCalled();
        expect(input.value()).toBe(true);
    });

    // it("has accessor for `disabled`", () => {
    //     expect(input.disabled()).toBe(false);
    //     input.disabled(true);
    //     expect(input.disabled()).toBe(true);
    //     expect(() => {input.disabled("aaa")}).toThrow();
    // });

});

describe('Switch', () => {

    var input, change, enter, leave, focus, blur, click;

    beforeEach(function(){
        change = jest.genMockFn();
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <ResaleSwitch changeCallback={change}
                    clickCallback={click}
                    focusCallback={focus}
                    blurCallback={blur}
                    mouseEnterCallback={enter}
                    mouseLeaveCallback={leave}
                    value={true}>[+]</ResaleSwitch>
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
        expect(change).toBeCalled();
    });
    it("has accessor for value", () => {
        expect(input.value()).toBe(true);
        input.toggle();
        expect(change).toBeCalled();
        expect(input.value()).toBe(false);
        input.toggle();
        expect(change).toBeCalled();
        expect(input.value()).toBe(true);
    });

    // it("has accessor for `disabled`", () => {
    //     expect(input.disabled()).toBe(false);
    //     input.disabled(true);
    //     expect(input.disabled()).toBe(true);
    //     expect(() => {input.disabled("aaa")}).toThrow();
    // });

});
