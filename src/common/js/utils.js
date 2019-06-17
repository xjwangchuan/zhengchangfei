// 防抖动
export function debounce(fn,delay){
  let timer;
  return function (...args){
    if(timer){
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if(args[0]){
        fn.apply(this,args)
      }
    }, delay);
  }
}
// 数组对象深拷贝
export const objDeepCopy = function (source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
      sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}
// 转换日期字符串，兼容ios
export const getCompaDate = function(date){
  return date.replace(/\-/g,'/');
}