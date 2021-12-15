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
    default:
      return state;
  }
};

export default cantactReducer;
