const funcs = require('../utils/searchFilter');

const search = 'whois';
const domain = 'www.github.com';

const data = 'something';

describe('Search Filter', () => {
  test('searchFilter should exists', () => {
    expect(funcs.searchFilter).toBeDefined();
  });

  test('searchFilter should be a function', () => {
    expect(typeof funcs.searchFilter).toBe('function');
  });

  test('searchFilter should be passed search and domain args', () => {
    expect(search).toBeTruthy();
    expect(domain).toBeTruthy();
    expect(search).not.toBeFalsy();
    expect(domain).not.toBeFalsy();
  });

  test('searchFilter should recieve strings', () => {
    expect(typeof search).toBe('string');
    expect(typeof domain).toBe('string');
  });

  test('stringFilter should return data', () => {
    expect(funcs.searchFilter(search, domain).toEqual(data));
  });
});
