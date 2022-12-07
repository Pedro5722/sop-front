
export function ConvertDate(date){
  const [year, month, day] = date.split('-');
  const result = [month, day, year].join('/');
  return result;
}

export function ConvertDateJson(date){
  const [day, month, year] = date.split('/');
  const result = [year, month, day].join('-');
  return result;
}