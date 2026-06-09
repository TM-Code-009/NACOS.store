import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
    description:
      "Experience crystal clear sound with premium quality audio.",
    rating: 4.8,
  },

  {
    id: 2,
    name: "Smart Watch",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
    description:
      "Stay connected with style.",
    rating: 4.7,
  },

  {
    id: 3,
    name: "Luxury Sneakers",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Fashion",
    description:
      "Comfort and luxury combined.",
    rating: 4.9,
  },

  {
    id: 4,
    name: "Leather Bag",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "Fashion",
    description:
      "Elegant premium leather bag.",
    rating: 4.5,
  },
];