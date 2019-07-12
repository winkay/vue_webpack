const demoMenus = [{
  code: "m.helloWorld",
  key: "helloWorld",
  role: [0, 1, 2],
  show: true
}, {
  code: "m.reverseRoutes",
  key: "reverseRoutes",
  role: [0, 1, 2],
  show: true,
  subMenus: [{
    code: "m.reverseRoutes-1",
    key: "reverseRoutes-1",
    role: [0, 1, 2],
    show: true,
    subMenus: [{
      code: "m.reverseRoutes-1-1",
      key: "reverseRoutes-1-1",
      role: [0, 1, 2],
      show: true
    }]
  }, {
    code: "m.reverseRoutes-2",
    key: "reverseRoutes-2",
    role: [0, 1, 2],
    show: true,
    subMenus: [{
      code: "m.reverseRoutes-2-1",
      key: "reverseRoutes-2-1",
      role: [0, 1, 2],
      show: true
    }]
  }]
}, {
  code: "m.codemirror",
  key: "codemirror",
  role: [0, 1, 2],
  show: true
}, {
  code: "m.table",
  key: "table",
  role: [0, 1, 2],
  show: true
}]
module.exports = demoMenus;
