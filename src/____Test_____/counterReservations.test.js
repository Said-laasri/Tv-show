import { countReservations } from '../modules/reservation.js';

describe('Count Resevations Function', () => {
  test('counts 0 items', () => {
    // Arrange
    const data = [];
    // Act
    const count = countReservations(data);
    // Assert
    expect(count).toBe(0);
  });
});
