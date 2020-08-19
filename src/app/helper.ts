const transformDate = value => {
  return value >= 10 ?  value : ('0' + value);
};

export const getRequestDate = date => {
  return `${date.getFullYear()}-${transformDate(date.getMonth() + 1)}-${transformDate(date.getDate())}`;
};
