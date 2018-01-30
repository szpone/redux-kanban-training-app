import React from 'react';
import { connect } from 'react-redux';
import { left, right } from './kanban/reducer.js';
import TaskForm from './TaskForm.jsx';

export class BoardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onLeft, onRight, board } = this.props;
        return (
            <div>
                <Column name="Nowe" items={board.new} button={onRight} />
                <Column name="Zrobione" items={board.done} button={onLeft} />
                <TaskForm/>
            </div>
        )
    }
}

export const Column = (props) => {
    const { name, items, button } = props;
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {items.map((item, i) => <li key={i}>{item.name}
                <button onClick={()=>button(item.id)}>Done</button></li>)}
            </ul>
        </div>
    )

};


function mapStateToProps(state) {
    return {
        board: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLeft(id){
            dispatch(left(id))
        },
        onRight(id) {
            dispatch(right(id))
        }
    }
}

const Board = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardComponent);

export default Board;
