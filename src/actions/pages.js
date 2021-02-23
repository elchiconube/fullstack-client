export const fetchPages = () => {
  return {
    type: "FETCH_PAGES",
    payload: {
      request: {
        method: "GET",
        url: "pages",
      },
    },
  };
};

export const createPage = (data) => {
  console.log({ data });
  return {
    type: "CREATE_PAGE",
    payload: {
      request: {
        method: "POST",
        url: "pages",
        data,
      },
    },
  };
};

export const deletePage = (id) => {
  return {
    type: "DELETE_PAGE",
    payload: {
      request: {
        method: "DELETE",
        url: `pages/${id}`,
      },
    },
  };
};

export const fetchPage = (id) => {
  return {
    type: "FETCH_PAGE",
    payload: {
      request: {
        method: "GET",
        url: `pages/${id}`,
      },
    },
  };
};
