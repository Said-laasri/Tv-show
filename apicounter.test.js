import displaycount from './src/apicounter.js';

test('if i add one element to IPA count = API.length+1', () => {
  // Arrange
  const IPA = [
    {
      name: 'IPA',
      count: 0,
    },
  ];
  // Act
  displaycount(IPA);
  // Assert
  expect(IPA[0].count).toBe(1);
});
