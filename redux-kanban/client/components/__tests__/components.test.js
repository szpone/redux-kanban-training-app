import React from 'react';
import { TaskFormComponent } from '../TaskForm.jsx';
import { Column, BoardComponent } from '../Board.jsx';
import "jest";
import { shallow } from 'enzyme';

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


