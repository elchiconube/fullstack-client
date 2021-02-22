export const fetchContents = () => {
  return {
    type: "FETCH_CONTENTS",
    payload: {
      request: {
        method: "GET",
        url: "contents",
      },
    },
  };
};

export const createContent = (data) => {
  return {
    type: "CREATE_CONTENT",
    payload: {
      request: {
        method: "POST",
        url: "contents",
        data,
      },
    },
  };
};

export const deleteContent = (id) => {
  console.log(id);
  return {
    type: "DELETE_CONTENT",
    payload: {
      request: {
        method: "DELETE",
        url: `contents/${id}`,
      },
    },
  };
};
