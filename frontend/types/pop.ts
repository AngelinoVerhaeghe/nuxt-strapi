import type { Category } from "~/types/category";
import type { Image } from "~/types/image";

export interface Pop {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: Image[];
  price: number;
  isNew: boolean;
  isFeatured: boolean;
  category: Category[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
