import reverse from '../src/index.js';

test('reverse', () => {
  const str = 'hello';
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
