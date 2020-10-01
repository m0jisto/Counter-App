import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': 
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

const store = createStore(reducer);

const update = () => document.querySelector('.count').innerHTML = store.getState();

store.subscribe(() => update());

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const reset = () => ({type: 'RESET'});

document.querySelector('.inc').addEventListener("click" , () => store.dispatch(inc()));

document.querySelector('.dec').addEventListener("click" , () => store.dispatch(dec()));

document.querySelector('.reset').addEventListener("click" , () => store.dispatch(reset()));