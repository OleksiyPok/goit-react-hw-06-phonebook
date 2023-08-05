// const filterInitialState = '';

const filterInitialState = {
  filterKey: '',
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return { ...state, filterKey: action.payload };
    default:
      return state;
  }
};

export const setFilter = queryString => {
  return {
    type: 'filter/setFilter',
    payload: queryString,
  };
};
