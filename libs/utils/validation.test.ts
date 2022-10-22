import { isValidatePassword, isEmail } from './validation';

describe('utils/validation', () => {
  test('isValidatePassword', () => {
    expect(isValidatePassword('aa123456')).toBe(true);
    expect(isValidatePassword('123456')).toBe(false);
  });
  test('isEmail', () => {
    expect(isEmail('milkmidi.liao@positivegrid.com')).toBe(true);
    expect(isEmail('milkmidi123123')).toBe(false);
  });
});
