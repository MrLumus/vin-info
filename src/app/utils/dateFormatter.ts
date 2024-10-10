export const getCurrentDateAsString = (): string => {
  const curDate = new Date();
  let dd = curDate.getDate().toString();
  let mm = (curDate.getMonth() + 1).toString();
  const yyyy = curDate.getFullYear().toString();

  if (dd.length == 1) dd = `0${dd}`;
  if (mm.length == 1) mm = `0${mm}`;

  return `${dd}.${mm}.${yyyy}`;
};
