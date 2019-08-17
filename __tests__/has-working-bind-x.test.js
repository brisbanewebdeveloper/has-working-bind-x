import hasWorkingBind from '../src/has-working-bind-x';

describe('hasWorkingBind', function() {
  it('is a boolean', function() {
    expect.assertions(1);
    expect(typeof hasWorkingBind).toBe('boolean');
  });
});
