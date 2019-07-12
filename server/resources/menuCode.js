const demoMenus = [{
  code: "m.helloworld",
  role: "0,1,2",
  show: true
}, {
  code: "m.reverseRoutes",
  role: "0,1,2",
  show: true,
  subMenus: [{
    code: "m.reverseRoutes-1",
    role: "0,1,2",
    show: true,
    subMenus: [{
      code: "m.reverseRoutes-1-1",
      role: "0,1,2",
      show: true
    }]
  }, {
    code: "m.reverseRoutes-2",
    role: "0,1,2",
    show: true,
    subMenus: [{
      code: "m.reverseRoutes-2-1",
      role: "0,1,2",
      show: true
    }]
  }]
}, {
  code: "m.codemirror",
  role: "0,1,2",
  show: true
}, {
  code: "m.table",
  role: "0,1,2",
  show: true
}]
export default demoMenus;
