import React, { useReducer, useState } from 'react';

function reducer(currentstate, action) {
    switch(action.type) {
        case "add-todo": return {
            todos: [...currentstate.todos, {text: action.text, completed: false}],
            todoCount: currentstate.todoCount + 1,
          };
        case "toggle-todo": return {
            todos: currentstate.todos.map((t, idx) => 
              idx === action.idx ? {...t, completed: !t.completed} : t),
            todoCount: currentstate.todoCount,
        };
        default: return currentstate;
    }
  }

export const UseReducer3 = () => {
    const [{todos, todoCount}, dispatch] = useReducer(reducer, {
        todos: [],
        todoCount: 0
      });
    const [text, setText] = useState("");

    return (
        <fieldset><legend>useReducer3 instead  redux if there is only one place to dispatch</legend>
          <form onSubmit={e => {
              e.preventDefault();
              dispatch({ type: "add-todo", text });
              setText("");
            }} >
                <input value={text} 
                  onChange={e => setText(e.target.value)} />
          </form>
          <div>number of todos: {todoCount}</div>
          {todos.map((t, idx) => 
              <div key={t.text} 
                   style={{
                      textDecoration: t.completed ? "line-through" : ""
                     }}
                   onClick={() => dispatch({type: "toggle-todo", idx})}
               >
                {t.text}
              </div>
            )}
        </fieldset>
    );
};