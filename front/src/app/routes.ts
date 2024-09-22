export const routes = {
  root: '/',
  main: '/main',
  login: '/login',
  register: '/register',
  add: '/add',
  notFound: '*',
}

export const routesWithoutHeader = [routes.login, routes.register]
