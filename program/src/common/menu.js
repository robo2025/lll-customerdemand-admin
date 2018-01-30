const menuData = [{
  name: '需求管理',
  icon: 'profile',
  path: 'reqs_manager',
}, {
  name: '方案管理',
  icon: 'appstore-o',
  path: 'solutions_manager',
}];

function formatter(data, parentPath = '') {
  const list = [];
  data.forEach((item) => {
    if (item.children) {
      list.push({
        ...item,
        path: `${parentPath}${item.path}`,
        children: formatter(item.children, `${parentPath}${item.path}/`),
      });
    } else {
      list.push({
        ...item,
        path: `${parentPath}${item.path}`,
      });
    }
  });
  return list;
}

export const getMenuData = () => formatter(menuData);
