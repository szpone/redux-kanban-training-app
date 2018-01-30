import React from 'react';
import TaskForm from '../TaskForm.jsx';
import { add, left, right } from '../kanban/reducer.js';
import reducer from '../kanban/reducer.js';




const newName = "dupa";
const givenId = 1;
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

describe('kanbanActions', () => {
   it('should create an action of adding', () => {
       const name = newName;
       const expectedAction = {
           name,
           type: "ADD"
       };
       expect(add(name)).toEqual(expectedAction)
   });
});


describe('kanbanActions', () => {
   it('it should move an object with given id', () => {
       const id = givenId;
       const expectedAction = {
           id,
           type: "LEFT"
       };
       expect(left(id)).toEqual(expectedAction)
   });
});


describe('kanbanActions', () => {
   it('it should move an object with given id', () => {
       const id = givenId;
       const expectedAction = {
           id,
           type: "RIGHT"
       };
       expect(right(id)).toEqual(expectedAction)
   });
});


describe('reducers', () => {
   it('should return initial state', () => {
       expect(reducer(undefined, {})).toEqual(
           {
               "new": [
                   {
                       "name": "kotek",
                       "id": 1
                   }],
               "done": [
                   {
                       "name": "piesek",
                       "id": 2
                   }],
               "nextId": 3
           }
       )
   });
   it('should add object', () => {
       expect(
           reducer(initialState, {
               type: "ADD",
               name: 'dupa',
           })
       ).toEqual(
                      {
               "new": [
                   {
                       "name": "kotek",
                       "id": 1
                   },
                   {
                       "name": "dupa",
                       "id": 3
                   }],
               "done": [
                   {
                       "name": "piesek",
                       "id": 2
                   }],
               "nextId": 4
           }

       )
   });
   it('should move object to the left', () => {
       expect(
           reducer(initialState, {
               type: "LEFT",
               id: 2,
           })
       ).toEqual(
           {
               "new": [
                   {
                       "name": "kotek",
                       "id": 1
                   },
                   {
                       "name": "piesek",
                       "id":2
                   }
               ],
               "done": [],
               "nextId": 3
           }
       )
   });
    it('should move object to the right', () => {
        expect(
            reducer(initialState, {
                type: "RIGHT",
                id: 1,
            })
        ).toEqual(
            {
                "new": [],
                "done": [
                    {
                        "name": "piesek",
                        "id": 2
                    },
                    {
                        "name": "kotek",
                        "id": 1
                    },

                ],
                "nextId": 3
            }
        )
    });
});


