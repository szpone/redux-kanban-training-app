import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedTaskForm, { TaskForm } from '../TaskForm.jsx';
import ConnectedBoard, { Board } from '../Board.jsx';
import { Column, BoardComponent } from '../Board.jsx';
import { connect } from 'react-redux'
import { Provider } from 'react-redux';
import {createStore} from "redux";
import reducer from "../kanban/reducer";


let store = createStore(
    reducer,
);

test('render a form', () => {
   const wrapper = shallow(
       <Provider store={store}><ConnectedTaskForm/></Provider>
   );
   expect(wrapper).toMatchSnapshot();
});


describe('<Column />', () => {
   it('allows to set props', () => {
       const wrapper = mount(<Column name="Nowe" />);
       expect(wrapper.props().name).to.equal("Nowe");
   })
});
