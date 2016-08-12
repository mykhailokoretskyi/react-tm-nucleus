import React from 'react';
import Input from '../input.jsx';
import TestUtils from 'react-addons-test-utils';

describe('Input', () => {

    var input, change, enter, leave, focus, blur, click;

    beforeEach(function(){
        change = jest.genMockFn();
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <Input required={true}
                   disabled={false}
                   label="test label"
                   name="test_input"
                   value="initial value"
                   id="test"
                   type="text"
                   changeCallback={change}
                   clickCallback={click}
                   focusCallback={focus}
                   blurCallback={blur}
                   mouseEnterCallback={enter}
                   mouseLeaveCallback={leave}/>
        );
    });

    it('doesnt trigger change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.change(element, {target:{value:"initial value"}});
        expect(change).not.toBeCalled();
    });
    it('triggers mouse enter callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.mouseEnter(element);
        expect(enter).toBeCalled();
    });
    it('triggers mouse leave callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.mouseLeave(element);
        expect(leave).toBeCalled();
    });
    it('triggers focus callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.focus(element);
        expect(focus).toBeCalled();
    });
    it('triggers blur callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.blur(element);
        expect(blur).toBeCalled();
    });
    it('triggers click callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.click(element);
        expect(click).toBeCalled();
    });
    it('triggers change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.change(element, {target:{value:"Value"}});
        expect(change).toBeCalled();
    });
    it("has accessor for value", () => {
        expect(input.value()).toBe("initial value");
        input.value("new");
        expect(input.value()).toBe("new");
    });
    it("triggers change on value change", () => {
        input.value("another value");
        expect(change).toBeCalled();
        expect(input.value()).toBe("another value");
    });

    it("has accessor for `required`", () => {
        expect(input.required()).toBe(true);
        input.required(false);
        expect(input.required()).toBe(false);
        expect(() => {input.required("aaa")}).toThrow();
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
        expect(() => {input.disabled("aaa")}).toThrow();
    });

    it("has accessor for `type`", () => {
        expect(input.type()).toBe("text");
    });

    it("has accessor for `checked`", () => {
        expect(input.checked()).toBe(false);
        input.checked(true);
        expect(input.checked()).toBe(true);
        expect(() => {input.checked("aaa")}).toThrow();
    });
});