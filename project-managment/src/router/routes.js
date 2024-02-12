export default [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/pages/HomePage"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("@/views/pages/Projects/ProjectIndex"),
    },
    {
    path: '/projects/view/:id',
    name: 'ViewProject',
    props: true,
    component: () => import('@/views/pages/Projects/ProjectView'),
    },
    {
      path: "/branches",
      name: "Branches",
      component: () => import("@/views/pages/Branches/BranchIndex"),
    },
    {
      path: "/branch/view/:projectId/:brancName",
      name: "ViewBranch",
      props: true,
      component: () => import("@/views/pages/Branches/BranchView"),
    },
    {
      path: "/commits",
      name: "Commits",
      component: () => import("@/views/pages/Commits/CommitIndex"),
    },
    {
      path: "/issues",
      name: "Issues",
      component: () => import("@/views/pages/Issues/IssueIndex"),
    },
    {
      path: '/issue/view/:projectId/:issueId',
      name: 'ViewIssue',
      props: true,
      component: () => import('@/views/pages/Issues/IssueView'),
      },

      {
        path: '/issue/add',
        name: 'AddIssue',
        props: true,
        component: () => import('@/views/pages/Issues/IssueAdd'),
        },

      
  ]