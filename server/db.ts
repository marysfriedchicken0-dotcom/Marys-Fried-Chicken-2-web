import Database from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';
import path from 'path';

export interface DatabaseSchema {
  menu_items: MenuItemTable;
  locations: LocationTable;
  orders: OrderTable;
  reviews: ReviewTable;
  team_celebrations: TeamCelebrationTable;
  promotions: PromotionTable;
  admin_settings: AdminSettingTable;
}

interface MenuItemTable {
  id: number;
  category: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

interface LocationTable {
  id: number;
  name: string;
  address: string;
  phone: string;
  state: string;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
}

interface OrderTable {
  id: number;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  items: string;
  notes: string | null;
  delivery_fee: number;
  payment_method: string;
  tip: number;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ReviewTable {
  id: number;
  customer_name: string;
  rating: number;
  comment: string;
  published: number;
  created_at: string;
}

interface TeamCelebrationTable {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  type: string;
  created_at: string;
}

interface PromotionTable {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  discount_percent: number | null;
  valid_from: string;
  valid_until: string;
  created_at: string;
}

interface AdminSettingTable {
  id: number;
  setting_key: string;
  setting_value: string;
  updated_at: string;
}

const dbPath = path.join(process.cwd(), 'data', 'database.sqlite');
const sqliteDb = new Database(dbPath);

export const db = new Kysely<DatabaseSchema>({
  dialect: new SqliteDialect({ database: sqliteDb }),
  log: ['query', 'error'],
});
