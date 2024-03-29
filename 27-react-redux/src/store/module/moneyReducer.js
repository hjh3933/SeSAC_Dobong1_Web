const initialState = 0;
const DEPOSIT = "money/deposit";
const WITHDRAW = "money/withdraw";

export const deposit = (payload) => ({ type: DEPOSIT, payload: payload });
export const withdraw = (payload) => ({ type: WITHDRAW, payload: payload });

export default function moneyReducer(moneyState = initialState, action) {
  if (action.type === WITHDRAW) {
    return moneyState - action.payload;
  } else if (action.type === DEPOSIT) {
    return moneyState + action.payload;
  } else {
    return moneyState;
  }
}
