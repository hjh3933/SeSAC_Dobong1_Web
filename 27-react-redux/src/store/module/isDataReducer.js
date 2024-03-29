const initialState = false;
const CHANGE = "isData/CHANGE";
export function changeAction() {
  return { type: CHANGE };
}

export const isDataReducer = (state = initialState, action) => {
  if (action.type === CHANGE) {
    return !state;
  }
  return state;
};
