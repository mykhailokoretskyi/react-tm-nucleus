import React from 'react';
import Dropdown from '../dropdown';
import TestUtils from 'react-addons-test-utils';

describe('Input', () => {

    var input, inputMultiple, change, enter, leave, focus, blur, click;

    beforeEach(function(){
        change = jest.genMockFn();
        enter = jest.genMockFn();
        leave = jest.genMockFn();
        focus = jest.genMockFn();
        blur = jest.genMockFn();
        click = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <Dropdown label="Choose"
                      defaultValue=""
                      changeCallback={change}
                      icon='<use xlink:href="img/someIcon" />'>
                <option value="" />
                <option value="a">A</option>
                <option value="b">B</option>
            </Dropdown>
        );

        inputMultiple = TestUtils.renderIntoDocument(
            <Dropdown label="Choose" defaultValue={[]} multiple={true} icon='<use xlink:href="img/someIcon" />'>
                <option value="" />
                <option value="a">A</option>
                <option value="b">B</option>
            </Dropdown>
        );
    });

    // it('doesnt trigger change callback', () => {
    //     let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
    //     TestUtils.Simulate.change(element, {target:{value:"initial value"}});
    //     expect(change).not.toBeCalled();
    // });
    // it('triggers mouse enter callback', () => {
    //     let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
    //     TestUtils.Simulate.mouseEnter(element);
    //     expect(enter).toBeCalled();
    // });
    // it('triggers mouse leave callback', () => {
    //     let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
    //     TestUtils.Simulate.mouseLeave(element);
    //     expect(leave).toBeCalled();
    // });
    // it('triggers focus callback', () => {
    //     let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
    //     TestUtils.Simulate.focus(element);
    //     expect(focus).toBeCalled();
    // });
    // it('triggers blur callback', () => {
    //     let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
    //     TestUtils.Simulate.blur(element);
    //     expect(blur).toBeCalled();
    // });
    // it('triggers click callback', () => {
    //     let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
    //     TestUtils.Simulate.click(element);
    //     expect(click).toBeCalled();
    // });
    it('triggers change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'select');
        TestUtils.Simulate.change(element, {target:{value:"a"}});
        expect(change).toBeCalled();
    });
    it("has accessor for value", () => {
        expect(input.value()).toBe("");
        input.value("a");
        expect(input.value()).toBe("a");

        expect(inputMultiple.value().length).toBe(0);
        inputMultiple.value(["a","b"]);
        expect(inputMultiple.value().length).toBe(2);
    });

    it("triggers change on value change", () => {
        input.value("a");
        expect(change).toBeCalled();
        expect(input.value()).toBe("a");
    });

    it("has accessor for `required`", () => {
        expect(input.required()).toBe(false);
        input.required(true);
        expect(input.required()).toBe(true);
    });

    it("has accessor for `multiple`", () => {
        expect(input.multiple()).toBe(false);
        input.multiple(true);
        expect(input.multiple()).toBe(true);
    });

    // it("has accessor for `disabled`", () => {
    //     expect(input.disabled()).toBe(false);
    //     input.disabled(true);
    //     expect(input.disabled()).toBe(true);
    //     expect(() => {input.disabled("aaa")}).toThrow();
    // });

    // it("has accessor for `type`", () => {
    //     expect(input.type()).toBe("text");
    // });

    // it("has accessor for `checked`", () => {
    //     expect(input.checked()).toBe(false);
    //     input.checked(true);
    //     expect(input.checked()).toBe(true);
    //     expect(() => {input.checked("aaa")}).toThrow();
    // });
});