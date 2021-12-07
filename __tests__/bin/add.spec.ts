import { add } from './add';
describe('should add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
