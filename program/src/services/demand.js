import Cookies from 'js-cookie';
import lyRequest from '../utils/lyRequest';
import { URL1 } from '../constant/config';

// 获取所有需求
export async function queryAllDemands(offset, limit) {
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/reqs?offset=${offset}&limit=${limit}`, {
    headers: {
      Authorization: acess_token,
    },
  });
}


// 审核需求 1，审核通过 2.审核不通过
export async function checkDemand(reqId, status) {
  console.log('审核需求参数', reqId, status);
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/reqs/${reqId}/audit_status`, {
    method: 'put',
    headers: {
      Authorization: acess_token,
    },
    data: {
      status,
    },
  });
}

// 删除需求
export async function deleteDemand(reqId) {
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/reqs/${reqId}`, {
    method: 'delete',
    headers: {
      Authorization: acess_token,
    },
  });
}

// 多选删除需求
export async function deleteDemands(reqIdArr) {
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/reqs`, {
    method: 'delete',
    headers: {
      Authorization: acess_token,
    },
    data: {
      ids: reqIdArr,
    },
  });
}

// 需求详情
export async function getDemandDetail(reqId) {
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/reqs/${reqId}`, {
    method: 'get',
    headers: {
      Authorization: acess_token,
    },
  });
}

