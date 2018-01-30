import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Board from './components/Board.jsx';
import { Provider } from 'react-redux';
import reducer from './components/kanban/reducer';

let store = createStore(
    reducer,
);


ReactDOM.render(<Provider store={store}><Board/></Provider>, document.getElementById('root'));
