// import isEmail from 'validator/es/lib/isEmail';
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */

// @ts-ignore
export { default as isEmail } from 'validator/lib/isEmail';

// Min 6 - 20 maximal characters.
const PASSWORD_MIN_MAX = /^.{6,20}$/;
export const isValidatePasswordMinMax = (password: string): boolean => PASSWORD_MIN_MAX.test(password);

// At least 1 upper or lowercase letter.
const PASSWORD_1_LETTER = /(?=.*[a-zA-z])/;
export const isValidatePassword1Letter = (password: string): boolean => PASSWORD_1_LETTER.test(password);

// Including and 1 number or special character.
const PASSWORD_1_NUMBER = /(?=.*[\d\W])/;
export const isValidatePassword1Number = (password: string): boolean => PASSWORD_1_NUMBER.test(password);

const PASSWORD_REGEX = /^(?=.*[\d\W])(?=.*[a-zA-z])(?!.*[\u4e00-\u9fa5]).{6,20}$/;
// const ASIA_UNICODE_REGEX = /^[\u4e00-\u9fa5]+$/;
export const isValidatePassword = (password: string): boolean => PASSWORD_REGEX.test(password);

// const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// export const isEmail = validatorIsEmail;
