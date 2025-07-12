const initialState = {
  isShow: false,
};

function showModalReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, isShow: true };
    case "HIDE_MODAL":
      return { ...state, isShow: false };

    default:
      return state;
  }
}

export default showModalReducer;
