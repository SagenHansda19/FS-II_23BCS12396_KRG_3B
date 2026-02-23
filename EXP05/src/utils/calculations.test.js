/**
 * Calculation Utilities Tests
 * Tests for helper functions used in the EcoTrack application
 */

// Helper function to calculate total carbon
export const calculateTotalCarbon = (logs) => {
  return logs.reduce((acc, log) => {
    if (log.carbon > 0) acc += log.carbon;
    return acc;
  }, 0);
};

// Helper function to calculate average carbon
export const calculateAverageCarbon = (logs) => {
  if (logs.length === 0) return 0;
  const total = calculateTotalCarbon(logs);
  return (total / logs.length).toFixed(2);
};

// Helper function to filter high carbon activities
export const filterHighCarbonActivities = (logs, threshold = 4) => {
  return logs.filter((log) => log.carbon >= threshold);
};

// Helper function to find highest carbon activity
export const findHighestCarbonActivity = (logs) => {
  if (logs.length === 0) return null;
  return logs.reduce((max, log) => (log.carbon > max.carbon ? log : max));
};

describe('Carbon Calculation Utilities', () => {
  const mockLogs = [
    { id: 1, activity: 'Car Travel', carbon: 4 },
    { id: 2, activity: 'Electricity Usage', carbon: 6 },
    { id: 3, activity: 'Cycling', carbon: 0 },
    { id: 4, activity: 'Public Transport', carbon: 2 },
    { id: 5, activity: 'Meat Consumption', carbon: 5 },
  ];

  describe('calculateTotalCarbon', () => {
    test('calculates total carbon correctly', () => {
      const total = calculateTotalCarbon(mockLogs);
      expect(total).toBe(17); // 4 + 6 + 0 + 2 + 5
    });

    test('returns 0 for empty logs', () => {
      const total = calculateTotalCarbon([]);
      expect(total).toBe(0);
    });

    test('ignores zero carbon activities', () => {
      const total = calculateTotalCarbon(mockLogs);
      expect(total).toBe(17); // Does not include the 0 from Cycling
    });
  });

  describe('calculateAverageCarbon', () => {
    test('calculates average carbon correctly', () => {
      const average = calculateAverageCarbon(mockLogs);
      expect(average).toBe('3.40'); // 17 / 5 = 3.4
    });

    test('returns 0 for empty logs', () => {
      const average = calculateAverageCarbon([]);
      expect(average).toBe(0);
    });

    test('returns fixed 2 decimal places', () => {
      const average = calculateAverageCarbon(mockLogs);
      expect(average).toMatch(/^\d+\.\d{2}$/);
    });
  });

  describe('filterHighCarbonActivities', () => {
    test('filters high carbon activities with default threshold', () => {
      const filtered = filterHighCarbonActivities(mockLogs);
      expect(filtered.length).toBe(3); // Car, Electricity, Meat
      expect(filtered.every((log) => log.carbon >= 4)).toBe(true);
    });

    test('filters with custom threshold', () => {
      const filtered = filterHighCarbonActivities(mockLogs, 5);
      expect(filtered.length).toBe(2); // Electricity, Meat
    });

    test('returns empty array when no activities match', () => {
      const filtered = filterHighCarbonActivities(mockLogs, 10);
      expect(filtered.length).toBe(0);
    });
  });

  describe('findHighestCarbonActivity', () => {
    test('finds the highest carbon activity', () => {
      const highest = findHighestCarbonActivity(mockLogs);
      expect(highest.activity).toBe('Electricity Usage');
      expect(highest.carbon).toBe(6);
    });

    test('returns null for empty logs', () => {
      const highest = findHighestCarbonActivity([]);
      expect(highest).toBeNull();
    });

    test('returns first occurrence if multiple have same carbon', () => {
      const logsWithDuplicates = [
        { id: 1, activity: 'First', carbon: 6 },
        { id: 2, activity: 'Second', carbon: 6 },
      ];
      const highest = findHighestCarbonActivity(logsWithDuplicates);
      expect(highest.activity).toBe('First');
    });
  });
});
