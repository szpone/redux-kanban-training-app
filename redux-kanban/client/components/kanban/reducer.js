

export function left(id) {
    return {
        type: 'LEFT',
        id,
    }
}

export function right(id) {
    return {
        type: 'RIGHT',
        id,
    }
}

export function add(name) {
    return {
        type: 'ADD',
        name,
    }
}


const initialState = {
    "new": [{
        "name": "kotek",
        "id": 1
    }],
    "done": [{
        "name": "piesek",
        "id": 2
    }],
    "nextId": 3,
};

export default function reducer(state = initialState, action) {
    state = {
        new: state.new.slice(),
        done: state.done.slice(),
        nextId: state.nextId,
    };
    switch(action.type) {
        case 'RIGHT': {
            for (let i in state.new) {
                let item = state.new[i];
                if (item.id === action.id) {
                    state.new.splice(i, 1);
                    state.done.push(item);
                    break;
                }
            }
            return state;
        }

        case 'LEFT': {
            for (let i in state.done) {
                let item = state.done[i];
                if (item.id === action.id) {
                    state.done.splice(i, 1);
                    state.new.push(item);
                    break;
                }
            }
            return state;
        }

        case 'ADD': {
            state.new.push({"name": action.name, "id": state.nextId});
            state.nextId++;
            return state;
        }
        default:
            return state;
    }
}


