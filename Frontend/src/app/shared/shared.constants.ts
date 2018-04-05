export const EMAIL_PATTERN = [
  '^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
  '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
  '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
].join('');

export const ALPHABET_PATTERN = /^[a-zA-ZäöåÄÖÅ]+$/;
export const ALPHABET_NUMBERS_PATTERN = /^[0-9a-zA-ZåäöÅÄÖ]+$/;

export const PHONE_PATTERN = '^(\\+46|0) *7[0236] *\\d{4} *\\d{3}$';
