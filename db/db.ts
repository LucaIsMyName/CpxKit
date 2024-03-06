const AVATAR_URL = "https://www.gravatar.com/avatar/";
const IMG_URL = "https://source.unsplash.com/random/";

import { products as PRODUCTS } from "./tables/procucts";
import { categories as CATEGORIES } from "./tables/categories";
import { users as USERS } from "./tables/users";
import { navigations as NAVIGATIONS } from "./tables/navigations";
import { routes as ROUTES } from "./tables/routes";
import { posts as POSTS, action, query } from "./tables/posts";

export const DB = {
  AVATAR_URL,
  IMG_URL,
  ROUTES,
  NAVIGATIONS,
  USERS,
  PRODUCTS,
  CATEGORIES,
  POSTS,
  // DB actions
  query,
  action,
};
