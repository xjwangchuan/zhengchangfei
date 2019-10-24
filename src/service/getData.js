import fetch from "../common/js/fetch";

/**
 * 获取首页默认地址
 */
// export const getLogin = (userName,password) =>
//   fetch("/focUserController.do?appLogin", {
//     userName:userName,
//     password:password
//   },'POST');
export const getLogin = () =>
  fetch("/transitibmwebspheremq.do?focRvr", {
    
  });
// export const vipCart = (id, number, password) => fetch('/member/v1/users/' + id + '/delivery_card/physical_card/bind',{
// 	number,
// 	password
// }, 'POST')