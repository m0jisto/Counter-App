import React, { useReducer } from 'react'
import Counter from './counter'
import reducer from '../reducer/'

export const ContextApp = React.createContext();

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, 0)

    return (
        <ContextApp.Provider value={ { state, dispatch } }>
            <Counter />
        </ContextApp.Provider>
    )
};

export default App;
