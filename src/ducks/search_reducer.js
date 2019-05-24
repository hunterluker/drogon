const initalState = {
  data: []
};

const SAVE_PING_DATA = 'SAVE_PING_RESULTS';
const SAVE_WHOIS_DATA = 'SAVE_WHOIS_RESULTS';

export function savePingResults(domain, data) {
  console.log(domain, data);
  return {
    type: SAVE_PING_DATA,
    payload: { type: 'Ping', name: domain, searchData: [...data] }
  };
}

export function saveWhoisResults(domain, data) {
  console.log(domain, data);
  return {
    type: SAVE_WHOIS_DATA,
    payload: { type: 'Whois', name: domain, searchData: { ...data } }
  };
}

export default function searchReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_WHOIS_DATA:
      return { ...state, data: [...state.data, payload] };
    case SAVE_PING_DATA:
      return { ...state, data: [...state.data, payload] };
    default:
      return state;
  }
}
