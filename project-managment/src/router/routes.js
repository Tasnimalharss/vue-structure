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
    },
    {
      path: "/branch",
      name: "Branch",
      component: () => import("@/views/pages/Branch/BranchIndex"),
    },
    {
      path: "/branch/view/:projectId/:brancName",
      name: "viewBranch",
      props: true,
      component: () => import("@/views/pages/Branch/BranchView"),
    },
    {
      path: "/commit",
      name: "Commit",
      component: () => import("@/views/pages/Commit/CommitIndex"),
    },
    {
      path: "/issue",
      name: "Issue",
      component: () => import("@/views/pages/Issue/IssueIndex"),
    },
    {
      path: '/issue/view/:id',
      name: 'viewIssue',
      props: true,
      component: () => import('@/views/pages/Issue/IssueView'),
      },
  ]