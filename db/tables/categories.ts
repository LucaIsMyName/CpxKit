import { Cpx } from "../../app/app";

interface Category {
  id: number;
  title: string;
  description: string;
  icon: any;
}
export const categories: Category[] = [
  {
    id: 0,
    title: "Home",
    description: "Products for a cozy Home",
    icon: Cpx.Icon.home,
  },
  {
    id: 1,
    title: "Garden",
    description: "Utilities for the Gardebn and outside activities",
    icon: Cpx.Icon.home,
  },
  {
    id: 2,
    title: "Fashion",
    description: "Clothes and Accessories",
    icon: Cpx.Icon.home,
  },
  {
    id: 3,
    title: "Electronics",
    description: "Electronic Devices and Accessories",
    icon: Cpx.Icon.home,
  },
];
