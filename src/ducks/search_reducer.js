import uuid from 'uuid/v4';

const initalState = {
  data: [],
  currentSearch: {}
};

const SAVE_PING_DATA = 'SAVE_PING_RESULTS';
const SAVE_WHOIS_DATA = 'SAVE_WHOIS_RESULTS';
const SAVE_REVERSE_DATA = 'SAVE_REVERSE_RESULTS';
const SAVE_SUB_DATA = 'SAVE_SUB_RESULTS';

const FIND_SEARCH = 'FIND_SEARCH';
const REMOVE_SEARCH = 'REMOVE_SEARCH';

export function savePingResults(domain, data) {
  return {
    type: SAVE_PING_DATA,
    payload: { id: uuid(), type: 'Ping', name: domain, searchData: [...data] }
  };
}

export function saveWhoisResults(domain, data) {
  return {
    type: SAVE_WHOIS_DATA,
    payload: {
      id: uuid(),
      type: 'Whois',
      name: domain,
      searchData: { ...data }
    }
  };
}

export function saveReverseResults(domain, data) {
  return {
    type: SAVE_REVERSE_DATA,
    payload: {
      id: uuid(),
      type: 'Reverse-IP',
      name: domain,
      searchData: [...data]
    }
  };
}

export function saveSubResults(domain, data) {
  return {
    type: SAVE_REVERSE_DATA,
    payload: {
      id: uuid(),
      type: 'Subdomain',
      name: domain,
      searchData: [...data]
    }
  };
}

export function findSearch(id) {
  return {
    type: FIND_SEARCH,
    payload: id
  };
}

export function removeSearch(id) {
  return {
    type: REMOVE_SEARCH,
    payload: id
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
    case FIND_SEARCH:
      let search = state.data.find(search => search.id === payload);

      return { ...state, currentSearch: search };
    case REMOVE_SEARCH:
      let filteredData = state.data.filter(serach => serach.id !== payload);
      console.log(filteredData);
      return { ...state, data: filteredData };
    default:
      return state;
  }
}
