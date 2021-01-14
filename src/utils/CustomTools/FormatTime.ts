const formatTime = (fmt: string, date: Date): string => {
  /* 
    fmt的格式為"YYYYmmddHHMMSS"
  */
  let ret;
  const opt = {
    'Y+': date.getFullYear().toString(),
    'm+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'M+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString()
  };
  
  Object.keys(opt).forEach(k => {
    ret = new RegExp(`(${k})`).exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
    }
  });
  return fmt;
};
export default formatTime;