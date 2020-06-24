export default (state = false, action) => {
//   const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

  //   if (!matches) return state;

  //   const requestState = matches[2];
  //   const isLoading = requestState === 'REQUEST';

  //   return isLoading;

  if (action.type.includes('REQUEST')) {
    return true;
  }
  return false;
};
