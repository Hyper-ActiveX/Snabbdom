import { h } from 'snabbdom'; // ES6 import syntax
import { patch } from 'snabbdom'; // ES6 import syntax

// Function to create a virtual node based on state and props
function template(state, props) {
  return h('div', {}, [
    h('h1', {}, state.count),
    h('button', {
      on: { click: () => props.updateState({ count: state.count +  1 }) }
    }, 'Add')
  ]);
}

// Function to update state and re-render
function updateState(newState) {
  const oldVnode = patch(oldVnode, template(newState, props));
}

// Example usage
const initialState = { count:  0 };
const props = {};
let oldVnode;

patch(document.body, template(initialState, props), () => {
  oldVnode = document.getElementById('app');
});

// When the button is clicked, update the state and re-render
document.querySelector('button').addEventListener('click', () => {
  updateState({ count: initialState.count +  1 });
});

