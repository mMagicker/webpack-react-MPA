import pages from "@/pages"
import { Layout } from "@/components"
let routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "home",
        component: pages.Home,
      },
      {
        path: "user",
        component: pages.User,
      },
    ],
  },
]

export default routes
