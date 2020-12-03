import Dashboard from '../../pages/dashboard';

const routes = () => {
  return [
    {
      path: '/dashboard',
      exact: true,
      component: Dashboard
    },
    {
      path: '/dashboard/&date_from=:date_from&date_to=:date_to',
      exact: true,
      component: Dashboard
    }
  ]
}

export default routes;
