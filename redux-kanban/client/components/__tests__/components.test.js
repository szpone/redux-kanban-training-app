import React from 'react';
import { TaskForm } from '../TaskForm.jsx';
import { Column, BoardComponent } from '../Board.jsx';
import ReactDOM from 'react-dom';
import "jest";
import { shallow } from 'enzyme';

const boardComponentProps = { board: { new: [], done: [] }, onLeft: jest.fn(), onRight: jest.fn() };
const boardComponent = shallow(<BoardComponent {...boardComponentProps}/>);

test("render board with columns", () => {
    expect(boardComponent.find(Column)).toHaveLength(2);
});

it('renders correctly', () => {
   const tree = shallow(<BoardComponent {...boardComponentProps } />);
   expect(tree).toMatchSnapshot();
});
