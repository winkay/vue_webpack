const menuCodes = require('../resources/menuCode');
var getMenuCodeList = function (roleType) {
  let roleObj = {
    superadmin: 0,
    projectadmin: 1,
    projectuser: 2
  };
  roleType = roleObj[roleType];
  if (!roleType && roleType !== 0) {
    return [];
  }
  let menuCodeList = [];
  getMenuCode(menuCodeList, menuCodes, "", 0, roleType);

  return menuCodeList;
}

function getMenuCode(menuCodeList, menuList, parentCode, order, roleType) {
  menuList.forEach((menu) => {
    if (menu.show) {
      if (menu.role && menu.role.indexOf(roleType) >= 0) {
        // menuCodeList.push({
        //   menuCode: menu.code,
        //   key: menu.key,
        //   parentCode: parentCode,
        //   order: ++order
        // });
        menuCodeList.push(menu.code);
        if (menu.subMenus && menu.subMenus.length > 0) {
          getMenuCode(menuCodeList, menu.subMenus, menu.code, order, roleType);
        }
      }
    }
  })
}

module.exports = getMenuCodeList;
