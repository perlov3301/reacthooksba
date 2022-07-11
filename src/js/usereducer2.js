import React, { useReducer, useState } from 'react';

function reducer(currentstate, action) {
    switch(action.type) {
        case 'add-todo': return (
            {
                todos: [...currentstate.todos, {text: action.text, completed: false}] 
            }
          );
        case "toggle-todo": return ({
            todos: currentstate.todos.map((t, idx) =>
                idx === action.idx ? {...t, completed: !t.completed} : t
              )
        });
        default: return currentstate;
    }
}

export const UseReducer2 = () => {
    const [{todos}, dispatch] = useReducer(reducer,  { 
        todos: [],
        todoCount: 0
     });
    const [text, setText] = useState('');

    return (
        <fieldset><legend>useReducer:  use instead of redux: line-through todo if completed</legend>
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
                 onClick={() => dispatch({type: "toggle-todo", idx})}
                 style={{textDecoration: t.completed ? "line-through" : ""}}
                 >
                     {t.text}
            </div>)}
                 
        </fieldset>
    );
} ;