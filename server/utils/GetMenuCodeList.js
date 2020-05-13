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
  getMenuCode(menuCodeList, menuCodes, roleType);

  return menuCodeList;
}

function getMenuCode(menuCodeList, menuList, roleType) {
  menuList.forEach((menu) => {
    if (menu.show) {
      if (menu.role && menu.role.indexOf(roleType) >= 0) {
        menuCodeList.push(menu.code);
        if (menu.subMenus && menu.subMenus.length > 0) {
          getMenuCode(menuCodeList, menu.subMenus, roleType);
        }
      }
    }
  })
}

module.exports = getMenuCodeList;
