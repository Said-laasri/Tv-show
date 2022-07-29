import countElement from '../modules/apicounter.js';

describe('count number of elem in api', () => {
  test('should first', () => {
    const count = document.querySelectorAll('.count');
    const showCount = '(3)';
    count.innerHTML = showCount;

    setTimeout(() => {
      countElement();
    }, 2000);

    expect(count.innerHTML).toBe('(3)');
  });
});
