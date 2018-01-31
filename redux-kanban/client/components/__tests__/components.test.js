import React from 'react';
import { TaskFormComponent } from '../TaskForm.jsx';
import { Column, BoardComponent } from '../Board.jsx';
import "jest";

const boardComponentProps = { board: { new: [], done: [] }, onLeft: jest.fn(), onRight: jest.fn(), onAdd: jest.fn() };
const boardComponent = shallow(<BoardComponent {...boardComponentProps}/>);

test("render board with columns", () => {
    expect(boardComponent.find(Column)).toHaveLength(2);
});


it('renders correctly Board', () => {
   const tree = shallow(<BoardComponent {...boardComponentProps } />);
   expect(tree).toMatchSnapshot();
});


it('renders correctly TaskForm', () => {
   const tree = shallow(<TaskFormComponent />);
   expect(tree).toMatchSnapshot();
});


it('should click the submit button', () => {
    const taskForm = shallow(<TaskFormComponent {...boardComponentProps} />);
    taskForm.find(`button`).simulate('click');
});

it('should purge input', () => {
    const taskForm = mount(<TaskFormComponent {...boardComponentProps} />);
    const input = taskForm.find(`input`);
    input.instance().value = "Foo";
    input.simulate('change', input);
    expect(input.instance().value).toEqual("Foo");
    const button = taskForm.find(`button`);
    button.simulate('click');
    expect(input.instance().value).toEqual("");
});
