export const entries = (obj) => Object.entries(obj);

export const values = (obj) => Object.values(obj);

export const keys = (obj) => Object.keys(obj);

export const head = (array) => array?.[0];

export const length = (array) => array.length;

export const last = (obj) => obj[length(obj) - 1];

export const isObjectEmpty = (objectName) =>
  Object.keys(objectName).length === 0;

export const include = (arr, con) => arr.includes(con);

export const equal = (obj1, obj2 = 0) => obj1 === obj2;

export const lowerCase = (value) => value?.toLowerCase();

export const getObject = (array, key) =>
  array.find((obj) => equal(obj.name, key));

export const isArray = (obj) => Array.isArray(obj);

export const ternary = (bool, truthy, falsy) => (bool ? truthy : falsy);