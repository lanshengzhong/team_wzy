const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  roles: state => state.user.roles,
  costomColumns: state => state.app.costomColumns,
  account: state => state.app.account,
  menu: state => state.app.menu,
  btn: state => state.app.btn,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers
}
export default getters
