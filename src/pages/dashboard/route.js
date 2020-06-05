/* Layout */
import Layout from "@/layout";

// Export
export default {
  path: "/",
  component: Layout,
  redirect: "/dashboard",
  children: [
    {
      path: "dashboard",
      component: () => import("@/pages/dashboard"),
      name: "Dashboard",
      meta: { title: "Dashboard", icon: "dashboard", affix: true }
    }
  ]
};
