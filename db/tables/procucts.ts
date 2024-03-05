const IMG_URL = "https://source.unsplash.com/random/";
import { users as USERS } from "./users";
import { categories as CATEGORIES } from "./categories";

interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    currency: string;
    seller: Object;
    buyer: Object | null;    
    isSold: boolean;
    onlineSince: string;
    onlineUntil: string;
    images: string[]; // Renamed IMAGES to images for consistency and corrected the casing
    filters: {
        category: Object;
        keywords: string[];
    };
}

export const products: Product[] = [
  {
    id: 0,
    title: "Panhandle",
    description: "A panhandle is a small handle on the side of a pan. It is used to move the pan around and to hold it while cooking. It is also called a side handle or helper handle.",
    price: "45",
    currency: "EUR",
    seller: USERS[0],
    buyer: null,
    isSold: false,
    onlineSince: "2021-01-01",
    onlineUntil: "2021-12-31",
    images: [`${IMG_URL}${0}`, `${IMG_URL}${1}`, `${IMG_URL}${2}`],
    filters: {
      category: CATEGORIES[0],
      keywords: ["Home", "Kitchen", "Cooking"],
    },
  },
  {
    id: 1,
    title: "MacMini 2020",
    description: "Mac Mini M1 2020, used but in good condition. Comes with original box and power cable.",
    price: "560",
    currency: "EUR",
    seller: USERS[1],
    buyer: null,
    isSold: false,
    onlineSince: "2021-01-01",
    onlineUntil: "2021-12-31",
    images: [`${IMG_URL}${0}`, `${IMG_URL}${1}`, `${IMG_URL}${2}`],
    filters: {
      category: CATEGORIES[3],
      keywords: ["Computer", "Mac", "Apple"],
    },
  },
  {
    id: 2,
    title: "Product 3",
    description: "Mac Mini M1 2020, used but in good condition. Comes with original box and power cable.",
    price: "250",
    currency: "EUR",
    seller: USERS[0],
    buyer: null,
    isSold: false,
    onlineSince: "2021-03-02",
    onlineUntil: "2021-12-31",
    images: [`${IMG_URL}${0}`, `${IMG_URL}${1}`, `${IMG_URL}${2}`],
    filters: {
      category: CATEGORIES[2],
      keywords: ["Computer", "Mac", "Apple"],
    },
  },
  {
    id: 3,
    title: "Product 4",
    description: "Mac Mini M1 2020, used but in good condition. Comes with original box and power cable.",
    price: "560",
    currency: "EUR",
    seller: USERS[1],
    buyer: null,
    isSold: false,
    onlineSince: "2021-01-01",
    onlineUntil: "2021-12-31",
    images: [`${IMG_URL}${0}`, `${IMG_URL}${1}`, `${IMG_URL}${2}`],
    filters: {
      category: CATEGORIES[2],
      keywords: ["Computer", "Mac", "Apple"],
    },
  },
];
