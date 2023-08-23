import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home/Home.vue";
import Login from "../pages/Login/Login.vue";
import SignUp from "../pages/SignUp/SignUp.vue";
import NewPost from "../pages/Posts/New/NewPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/cadastro",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/posts/novo",
      name: "NewPost",
      component: NewPost,
    },
  ],
});

export default router;
