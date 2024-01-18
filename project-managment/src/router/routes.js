export default [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/pages/HomePage"),
    },
    {
      path: "/project",
      name: "Project",
      component: () => import("@/views/pages/project/ProjectIndex"),
    },
    {
      path: '/project/view/:id',
    name: 'viewProject',
    props: true,
    component: () => import('@/views/pages/project/ProjectView'),
    },]