const { add } = require("../arithmetica")

test ('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('0 + 0 is equal to 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('0 + 5 is equal to 5', () => {
    expect(add(0, 5)).toBe(5);
});

test('-3 + 3 is equal to 0', () => {
    expect(add(-3, 3)).toBe(0);
});

test('-5 + (-5) is equal to -10', () => {
    expect(add(-5, -5)).toBe(-10);
});

test('100 + 200 is equal to 300', () => {
    expect(add(100, 200)).toBe(300);
});

test('1.5 + 2.5 is equal to 4', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4);
});

test('Adding positive and negative numbers', () => {
    expect(add(5, -3)).toBe(2);
});

test('Adding decimal and negative numbers', () => {
    expect(add(-2.5, 1.5)).toBeCloseTo(-1);
});
