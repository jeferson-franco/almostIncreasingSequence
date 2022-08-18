const solution = require('./almostIncreasingSequence.js');

test('test 1', () => {
    expect(solution([1, 3, 2, 1])).toBe(false);
});

test('test 2', () => {
    expect(solution([1, 3, 2])).toBe(true);
});

test('test 3', () => {
    expect(solution([1, 2, 1, 2])).toBe(false);
});

test('test 4', () => {
    expect(solution([3, 6, 5, 8, 10, 20, 15])).toBe(false);
});

test('test 5', () => {
    expect(solution([1, 1, 2, 3, 4, 4])).toBe(false);
});

test('test 6', () => {
    expect(solution([1, 4, 10, 4, 2])).toBe(false);
});

test('test 7', () => {
    expect(solution([10, 1, 2, 3, 4, 5])).toBe(true);
});

test('test 8', () => {
    expect(solution([1, 1, 1, 2, 3])).toBe(false);
});

test('test 9', () => {
    expect(solution([0, -2, 5, 6])).toBe(true);
});

test('test 10', () => {
    expect(solution([1, 2, 3, 4, 5, 3, 5, 6])).toBe(false);
});

test('test 11', () => {
    expect(solution([40, 50, 60, 10, 20, 30])).toBe(false);
});

test('test 12', () => {
    expect(solution([1, 1])).toBe(true);
});

test('test 13', () => {
    expect(solution([1, 2, 5, 3, 5])).toBe(true);
});

test('test 14', () => {
    expect(solution([1, 2, 5, 5, 5])).toBe(false);
});

test('test 15', () => {
    expect(solution([10, 1, 2, 3, 4, 5, 6, 1])).toBe(false);
});

test('test 16', () => {
    expect(solution([1, 2, 3, 4, 3, 6])).toBe(true);
});

test('test 17', () => {
    expect(solution([1, 2, 3, 4, 99, 5, 6])).toBe(true);
});

test('test 18', () => {
    expect(solution([123, -17, -5, 1, 2, 3, 12, 43, 45])).toBe(true);
});

test('test 19', () => {
    expect(solution([3, 5, 67, 98, 3])).toBe(true);
});
