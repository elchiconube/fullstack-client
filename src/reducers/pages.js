export const initialState = {
  isLoading: false,
  pages: [],
  page: null,
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "UPDATE_PAGE":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PAGE_SUCCESS":
      return {
        ...state,
        page: payload.data,
        isLoading: false,
      };
    case "UPDATE_PAGE_FAIL":
      return {
        ...state,
        page: null,
        isLoading: false,
      };
    case "FETCH_PAGE":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PAGE_SUCCESS":
      return {
        ...state,
        page: payload.data,
        isLoading: false,
      };
    case "FETCH_PAGE_FAIL":
      return {
        ...state,
        page: null,
        isLoading: false,
      };
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
