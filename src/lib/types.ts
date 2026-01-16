export type RawProduct = {
  name: string;
  price: string;
  link: string;
  image: string;
  description?: string;
  clean_name?: string;
  price_min?: string;
  category: string;
};

export type PriceInfo = {
  raw: string;
  min?: number;
  max?: number;
  isRange: boolean;
  parseable: boolean;
};

export type Product = RawProduct & {
  id: string;
  slug: string;
  priceInfo: PriceInfo;
};

export type Catalog = {
  products: Product[];
  categories: string[];
  bySlug: Map<string, Product>;
};

export type CartItem = {
  id: string;
  name: string;
  type: "product" | "course";
  quantity: number;
  priceLabel: string;
  priceCents?: number;
  image?: string;
  slug?: string;
};

export type CartItemInput = Omit<CartItem, "quantity">;

export type Course = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  duration: string;
  location?: string;
  priceLabel: string;
  priceCents: number;
  cta: string;
  highlights: string[];
};

export type GuideSection = {
  heading: string;
  body: string;
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  sections: GuideSection[];
};