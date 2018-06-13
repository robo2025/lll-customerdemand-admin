import Cookies from 'js-cookie';
import lyRequest from '../utils/lyRequest';
import { URL1 } from '../constant/config';


// 获取所有方案列表
export async function queryAllSolutions(offset, limit) {
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/solutions?offset=${offset}&limit=${limit}`, {
    headers: {
      Authorization: acess_token,
    },
  });
}

// 审核方案 1，审核通过 2.审核不通过
export async function checkSolution(solutionId, status) {
  console.log('审核方案参数', solutionId, status);
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/solutions/${solutionId}/audit_status`, {
    method: 'put',
    headers: {
      Authorization: acess_token,
    },
    data: {
      status,
    },
  });
}

// 删除方案
export async function deleteSolution(solutionId) {
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/solutions/${solutionId}`, {
    method: 'delete',
    headers: {
      Authorization: acess_token,
    },
  });
}

// 获取方案详情
export async function getSolutionDetail(solutionId) {
  const acess_token = Cookies.get('access_token');
  return lyRequest(`${URL1}/operation/solutions/${solutionId}`, {
    method: 'get',
    headers: {
      Authorization: acess_token,
    },
  });
}

