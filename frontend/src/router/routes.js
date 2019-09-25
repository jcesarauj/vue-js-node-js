import DashboardLayout from "@/pages/dashBoard/dashboardLayout.vue";
import Initial from "@/pages/index.vue";
import Dashboard from "@/pages/dashboard/dashboard";
import Login from "@/pages/login/index.vue";
import Register from "@/pages/register/index.vue";

const routes = [
  {
    path: "/",
    component: Initial,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  { path: "*", component: Initial }
];

export default routes;
