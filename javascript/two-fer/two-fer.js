export const twoFer = (name = 'you') => {
  return `One for ${name === '' ? 'you' : name}, one for me.`;
};
