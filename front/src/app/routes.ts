export const routes = {
  root: '/',
  main: '/main',
  login: '/login',
  register: '/register',
  add: '/add',
  profile: '/profile',
  addNewProduct: '/addNewProduct',
  notFound: '*',
}

export const routesWithoutHeader = [routes.login, routes.register]
