import { icon } from '../index.js';

const AVATAR_URL = 'https://www.gravatar.com/avatar/';
const IMG_URL = 'https://source.unsplash.com/random/';

import { products as PRODUCTS } from './tables/procucts.js';
import { categories as CATEGORIES } from './tables/categories.js';
import { users as USERS } from './tables/users.js';
import { navigations as NAVIGATIONS } from './tables/navigations.js';
import { routes as ROUTES } from './tables/routes.js';

export const DB = {
    AVATAR_URL,
    IMG_URL,
    ROUTES,
    NAVIGATIONS,
    USERS,
    PRODUCTS,
    CATEGORIES
}