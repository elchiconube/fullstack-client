export const initialState = {
  isLoading: false,
  pages: [],
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "FETCH_PAGES":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PAGES_SUCCESS":
      return {
        ...state,
        pages: payload.data,
        isLoading: false,
      };
    case "FETCH_PAGES_FAIL":
      return {
        ...state,
        pages: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
