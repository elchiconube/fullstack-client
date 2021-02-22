export const initialState = {
  isLoading: false,
  contents: [],
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "FETCH_CONTENTS":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_CONTENTS_SUCCESS":
      return {
        ...state,
        contents: payload.data,
        isLoading: false,
      };
    case "FETCH_CONTENTS_FAIL":
      return {
        ...state,
        contents: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
