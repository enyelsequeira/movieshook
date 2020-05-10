export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIE':
      return { ...state, movie: 'test' };
    default:
      return state;
  }
};

// WHAT IS A REDUCER

// REDUCER IS A PURE FUNCTION
// it takes two parameters: a state, and an action
// based on action.type we return changed state.

// The pure function is always going to output the same thing if the same arguments are given
// const test = [];

// const doSomething = (a) => {
//   const x = [...a, 'test2'];

//   return x;
// };

// const value = doSomething(test);

