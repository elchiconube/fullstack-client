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
  console.log(id);
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
