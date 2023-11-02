import React, { createContext, useEffect, useState } from "react";

type TodoType = {
  id: string | number;
  desc: string;
  created_at?: Date | any
};

type TodoContextProps = {
  state: TodoType;
  setState: React.Dispatch<React.SetStateAction<TodoType>>
};

const DEFAULT_VALUE = {
    state: {
        id: '',
        desc: '',
        created_at: '',
    },
    setState: () => {},
}

const TodoContext = createContext<TodoContextProps>(DEFAULT_VALUE);

const TodoContextProvider: React.FC = ({children}) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <TodoContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {children}
            </TodoContext.Provider>
    )
}

export { TodoContextProvider }
export default TodoContext
