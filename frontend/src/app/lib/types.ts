export interface StringItem {
  en: string;
  zh: string;
  nl: string;
}

export interface Restaurant {
  name: StringItem;
  logo_url?: string | null;
}

export interface Table {
  table_number: number;
  restaurant: Restaurant;
}

export interface Tag {
  id: number;
  name: StringItem;
}

export interface Option {
  id: number;
  name: StringItem;
  description: StringItem;
  price: string;
}

export interface Dish {
  id: number;
  name: StringItem;
  description: StringItem;
  price: string;
  image: string;
  tags: Tag[];
  options: Option[];
}

export interface DishCategory {
  id: number;
  category_name: StringItem;
  dishes: Dish[];
}

export interface OrderItem {
  id: number;
  name: StringItem;
  quantity: number;
  unit_price: string;
  options: Option[];
}

export interface Order {
  id: number;
  table: Table;
  status:
    | 'placed'
    | 'cancelled'
    | 'finished';
  date: string;
  items: OrderItem[];
  total: string;
}