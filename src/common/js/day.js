import day from 'dayjs';
/**
 * @description  获取日期，格式yyyy/mm/dd
 */
export function getDate1(time){
  return day(time).format('YYYY/MM/DD');
}
/**
 * @description  获取日期，格式yyyy-mm-ss
 */
export function getDate2(time){
  return day(time).format('YYYY-MM-DD');
}
/**
 * @description 获取时间,格式hh:mm
 */
export function getTime(time){
  return day(time).format('HH:mm');
}
/**
 * @description 获取日期,格式mm/ss
 */
export function getDate3(time){
  return day(time).format('MM-DD');
  
}
/**
 * @description 获取详细的日期，格式 yy/mm/dd hh:mm
 */

export function getDetailDate1(time){
  return day(time).format('YY/MM/DD HH:mm')
}
/**
 * @description 获取详细的日期，格式 mm月dd日 week HH:mm
 */

export function getDetailDate2(time){
  const week = {
    'Monday':'星期一',
    'Tuesday':'星期二',
    'Wednesday':'星期三',
    'Thursday':'星期四',
    'Friday':'星期五',
    'Saturday':'星期六',
    'Sunday':'星期日',
  }
  const daycn = week[day(time).format('dddd')];
  return day(time).format('MM月DD日 ') + daycn + day(time).format(' HH:mm');
}
/**
 * @description 获取详细的日期，格式 mm月dd日 week
 */

export function getDetailDate3(time){
  const week = {
    'Monday':'星期一',
    'Tuesday':'星期二',
    'Wednesday':'星期三',
    'Thursday':'星期四',
    'Friday':'星期五',
    'Saturday':'星期六',
    'Sunday':'星期日',
  }
  const daycn = week[day(time).format('dddd')];
  return day(time).format('MM月DD日 ') + daycn ;
}
/**
 * @description 获取详细的日期，返回格式 week
 */

export function getWeek(time){
  const week = {
    'Monday':'星期一',
    'Tuesday':'星期二',
    'Wednesday':'星期三',
    'Thursday':'星期四',
    'Friday':'星期五',
    'Saturday':'星期六',
    'Sunday':'星期日',
  }
  return  week[day(time).format('dddd')];
}

/**
 * @description 在现在的时间上加几天
 */
export function addDays(time,num){
  return new Date(day(time).add(num,'days'))
}
/**
 * @description 在现在的时间上减几天
 */
export function subtractDays(time,num){
  return new Date(day(time).subtract(num,'days'))
}