export type CategoryId = "all" | "main" | "fast" | "drinks" | "desserts";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Exclude<CategoryId, "all">;
  rating: number;
  calories: number;
  prepTime: number;
  ingredients: string[];
  badge?: "new" | "popular";
}

export interface RestaurantInfo {
  name: string;
  subtitle: string;
  description: string;
  logo: string;
  heroImage: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  social: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
}
