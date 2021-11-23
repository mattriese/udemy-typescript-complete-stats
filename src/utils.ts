export const parseDate = (dateString: string): Date => {
  let year = parseInt(dateString.slice(6));
  let month = parseInt(dateString.slice(3, 5)) - 1;
  let day = parseInt(dateString.slice(0, 2));
  return new Date(year, month, day);
};
