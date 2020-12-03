import MainRouter from './MainRouter';

import * as Admin from './admin';

const routes = [
  {
    name: 'main',
    path: '/',
    children: []
  },
  {
    name: 'admin',
    path: '/admin',
    children: [
      ...Admin.Dashboard(),
    ]
  }
]

const Routes = () => <MainRouter routes={routes} />

export default Routes;
