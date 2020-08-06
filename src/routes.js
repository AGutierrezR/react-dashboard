import Dashboard from './views/Dashboard'
import Clients from './views/Clients';
import Products from './views/Products';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clients,
    layout: '/admin'
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Products,
    layout: '/admin'
  },
]

export default dashboardRoutes;
