import React, { useReducer, useState } from 'react';

function reducer(currentstate, action) {
    switch(action.type) {
        case 'add-todo': return (
            {todos: [...currentstate.todos, {text: action.text, completed: false}] }
        );
        default: return currentstate;
    }
}

export const UseReducer1 = () => {
    const [{todos}, dispatch] = useReducer(reducer,  { todos: [] });
    const [text, setText] = useState('');

    return (
        <fieldset><legend>useReducer1: basic use instead of redux: add todo to the list</legend>
          <form onSubmit={ e => 
              {e.preventDefault();
                dispatch({ type: 'add-todo', text });
                setText("");
            }
          }>
              <input value={text} onChange={(e) => setText(e.target.value)} />
          </form>
          {/* <pre>
              {JSON.stringify(todos, null, 2)}
          </pre> */}
          {/** map() create a new array by calling a function on each element */}
          {todos.map((t, idx) => 
            <div key={t.text} 
                 >
                     {t.text}
            </div>)}
                 
        </fieldset>
    );
} ;