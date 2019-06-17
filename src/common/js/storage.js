// localStorage

/**
 * 写入本地储存的方法
 * @method setLocal
 * @param {key，val}需要存入的键名和值
 */
export function setLocal(key,val){
    localStorage.setItem(key,val);
}
/**
 * 获取本地储存的方法
 * @method getLocal
 * @param {key}需要获取的键名
 */
export function getLocal(key){
    return localStorage.getItem(key);
}
/**
 * 写入本地储存的方法
 * @method removeLocal
 * @param {key}需要删除的键名
 */
export function removeLocal(...keys){
    keys.forEach((key) => {
        localStorage.removeItem(key)
    })
}


// sessionStorage
/**
 * 写入本地储存的方法
 * @method setSession
 * @param {key，val}需要存入的键名和值
 */
export function setSession(key,val){
    sessionStorage.setItem(key,val);
}
/**
 * 获取本地储存的方法
 * @method getSession
 * @param {key}需要获取的键名
 */
export function getSession(key){
    return sessionStorage.getItem(key);
}
/**
 * 写入本地储存的方法
 * @method removeSession
 * @param {key}需要删除的键名
 */
export function removeSession(...keys){
    keys.forEach((key) => {
        sessionStorage.removeItem(key)
    })
}
