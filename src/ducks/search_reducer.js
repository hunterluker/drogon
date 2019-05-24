const initalState = {
  data: []
};

const SAVE_PING_DATA = 'SAVE_PING_RESULTS';
const SAVE_WHOIS_DATA = 'SAVE_WHOIS_RESULTS';
const SAVE_REVERSE_DATA = 'SAVE_REVERSE_RESULTS';
const SAVE_SUB_DATA = 'SAVE_SUB_RESULTS';

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

export function saveReverseResults(domain, data) {
  console.log(domain, data);
  return {
    type: SAVE_REVERSE_DATA,
    payload: { type: 'Reverse-IP', name: domain, searchData: [...data] }
  };
}

export function saveSubResults(domain, data) {
  console.log(domain, data);
  return {
    type: SAVE_REVERSE_DATA,
    payload: { type: 'Subdomain', name: domain, searchData: [...data] }
  };
}

export default function searchReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_WHOIS_DATA:
      return { ...state, data: [...state.data, payload] };
    case SAVE_PING_DATA:
      return { ...state, data: [...state.data, payload] };
    case SAVE_REVERSE_DATA:
      return { ...state, data: [...state.data, payload] };
    case SAVE_SUB_DATA:
      return { ...state, data: [...state.data, payload] };
    default:
      return state;
  }
}
