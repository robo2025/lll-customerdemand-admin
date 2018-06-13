/*
* 后台管理系统常量：
* sso：      https://login.robo2025.com
* 后台管理API：http://139.199.96.235:9002
* */

// 单点登录URL
export const URL = '//testlogin.robo2025.com';

// 网站内容接口URL
export const URL1 = '//testapi.robo2025.com/customerdemand';

// 验证登录接口URL
export const LOGIN_URL = `${URL}/server/authorize`;

// 注册接口URL
export const REGISTER_URL = `${URL}/register`;

// 登录接口URL
export const LOGOUT_URL = `${URL}/logout`;

// 静态web服务器地址
const myHost = `${window.location.protocol}//${window.location.host}`;

// 前端登录验证URL
export const NEXT_URL = `${myHost}/#/test`;

// 前端首页URL
export const HOME_PAGE = `${myHost}/#/reqs_manager`;

// 前端验证URL
export const VERIFY_PAGE = `${myHost}/#/test`;

// 文件服务器URL
export const FILE_SERVER = '//imgcdn.robo2025.com/';

// 分页：每页显示多少记录
export const PAGE_SIZE = 10;
