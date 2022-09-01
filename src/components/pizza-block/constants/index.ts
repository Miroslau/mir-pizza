export type PizzaBlockProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export const typeNames = ["тонкое", "традиционное"];
