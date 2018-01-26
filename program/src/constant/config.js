/*
* 后台管理系统常量：
* sso：      https://login.robo2025.com
* 后台管理API：http://139.199.96.235:9002
* */

//单点登录URL
export const URL = 'https://login.robo2025.com';
// export const URL = 'http://120.27.46.167:8011';

//网站内容接口URL
//export const URL1 = 'http://139.199.96.235:9002';
export const URL1 = 'http://api-customerdemand.robo2025.com';

//验证登录接口URL
export const LOGIN_URL = URL + '/server/authorize';

//注册接口URL
export const REGISTER_URL = URL + '/register';

//登录接口URL
export const LOGOUT_URL = URL + '/logout';

// 静态web服务器地址
let myHost = window.location.protocol + "//"+window.location.host;

// 前端登录验证URL
export const NEXT_URL = myHost + '/#/test';

//前端首页URL
export const HOME_PAGE = myHost + '/#/reqs_manager';

//前端验证URL
export const VERIFY_PAGE = myHost + '/#/test';

//文件服务器URL
export const FILE_SERVER = '//imgcdn.robo2025.com/';

//分页：每页显示多少记录
export const PAGE_SIZE = 10;
