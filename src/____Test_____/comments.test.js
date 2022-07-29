import { countComments } from '../modules/comment.js';

describe('Count comments Function', () => {
  test('counts 0 items', () => {
    // Arrange
    const data = [];
    // Act
    const count = countComments(data);
    // Assert
    expect(count).toBe(0);
  });
});
