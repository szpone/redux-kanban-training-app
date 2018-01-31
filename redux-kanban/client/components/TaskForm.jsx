import React from 'react';
import { add } from "./kanban/reducer";
import { connect } from "react-redux";


export class TaskFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"name": ""}
    }
    render() {
        const { onAdd } = this.props;
        return (
            <div>
                <input type="text" value={this.state.name}
                       onChange={(event) => this.setState({"name": event.target.value})}/>
                <button id="add" onClick={() => {
                    onAdd(this.state.name);
                    this.setState({"name": ""});
                } }>Submit</button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onAdd(name){
            dispatch(add(name))
        },
    }
}

const TaskForm = connect(
    null,
    mapDispatchToProps
)(TaskFormComponent);

export default TaskForm;
