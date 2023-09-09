export function getDate(data : Date){
  const currentDate = new Date(data);
  const month = currentDate.toLocaleString("default", { month: "short" });
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  return [month, date, year];
}
