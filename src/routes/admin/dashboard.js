import Dashboard from '../../pages/dashboard';

const routes = () => {
  return [
    {
      path: '/dashboard',
      exact: true,
      component: (props) => <Dashboard {...props} />
    },
    {
      path: '/dashboard:slug',
      exact: true,
      component: (props) => <Dashboard {...props} />
    }
  ]
}

export default routes;
