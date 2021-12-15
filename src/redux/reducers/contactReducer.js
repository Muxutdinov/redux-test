const initialState = [
  {
    id: 1,
    name: "Jaxongir",
    email: "jmuxutdinov@mail.ru",
    number: 12344,
  },
  {
    id: 2,
    name: "Samar",
    email: "samar@mail.ru",
    number: 12376,
  },
];

const cantactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE":
      const updateState = state.map((value) =>
        value.id === action.payload.id ? action.payload : value
      );
      state = updateState;
      return state;
    case "DELETE":
      const filtered = state.filter(
        (value) => value.id !== action.payload && value
      );
      state = filtered;
      return state;
    default:
      return state;
  }
};

export default cantactReducer;
