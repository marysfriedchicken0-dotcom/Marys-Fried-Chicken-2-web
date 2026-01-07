import express from 'express';
import { db } from './db.js';

const router = express.Router();

// GET all orders
router.get('/api/orders', async (req: express.Request, res: express.Response) => {
  try {
    const orders = await db
      .selectFrom('orders')
      .selectAll()
      .orderBy('created_at', 'desc')
      .execute();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// POST new order
router.post('/api/orders', async (req: express.Request, res: express.Response) => {
  try {
    const { customer_name, customer_phone, customer_address, items, notes, delivery_fee, payment_method, tip } = req.body;

    const order = await db
      .insertInto('orders')
      .values({
        customer_name,
        customer_phone,
        customer_address,
        items: JSON.stringify(items),
        notes,
        delivery_fee,
        payment_method,
        tip,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returningAll()
      .executeTakeFirst();

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// UPDATE order status
router.patch('/api/orders/:id', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await db
      .updateTable('orders')
      .set({ status, updated_at: new Date().toISOString() })
      .where('id', '=', parseInt(id))
      .returningAll()
      .executeTakeFirst();

    res.json(order);
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
});

// GET all reviews (published)
router.get('/api/reviews/published', async (req: express.Request, res: express.Response) => {
  try {
    const reviews = await db
      .selectFrom('reviews')
      .selectAll()
      .where('published', '=', 1)
      .orderBy('created_at', 'desc')
      .execute();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// POST new review
router.post('/api/reviews', async (req: express.Request, res: express.Response) => {
  try {
    const { customer_name, rating, comment } = req.body;

    const review = await db
      .insertInto('reviews')
      .values({
        customer_name,
        rating,
        comment,
        published: 0,
        created_at: new Date().toISOString(),
      })
      .returningAll()
      .executeTakeFirst();

    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
});

// GET all reviews (admin - including unpublished)
router.get('/api/admin/reviews', async (req: express.Request, res: express.Response) => {
  try {
    const reviews = await db
      .selectFrom('reviews')
      .selectAll()
      .orderBy('created_at', 'desc')
      .execute();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// UPDATE review publish status
router.patch('/api/admin/reviews/:id', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { published } = req.body;

    const review = await db
      .updateTable('reviews')
      .set({ published: published ? 1 : 0 })
      .where('id', '=', parseInt(id))
      .returningAll()
      .executeTakeFirst();

    res.json(review);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Failed to update review' });
  }
});

// GET all locations
router.get('/api/locations', async (req: express.Request, res: express.Response) => {
  try {
    const locations = await db
      .selectFrom('locations')
      .selectAll()
      .orderBy('state', 'asc')
      .execute();
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
});

// GET all promotions
router.get('/api/promotions', async (req: express.Request, res: express.Response) => {
  try {
    const promotions = await db
      .selectFrom('promotions')
      .selectAll()
      .where('valid_until', '>=', new Date().toISOString())
      .orderBy('created_at', 'desc')
      .execute();
    res.json(promotions);
  } catch (error) {
    console.error('Error fetching promotions:', error);
    res.status(500).json({ error: 'Failed to fetch promotions' });
  }
});

// GET admin settings
router.get('/api/admin/settings', async (req: express.Request, res: express.Response) => {
  try {
    const settings = await db
      .selectFrom('admin_settings')
      .selectAll()
      .execute();

    const settingsMap = settings.reduce((acc, setting) => {
      acc[setting.setting_key] = setting.setting_value;
      return acc;
    }, {} as Record<string, string>);

    res.json(settingsMap);
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// UPDATE admin settings
router.post('/api/admin/settings', async (req: express.Request, res: express.Response) => {
  try {
    const settings = req.body;

    for (const [key, value] of Object.entries(settings)) {
      await db
        .insertInto('admin_settings')
        .values({ setting_key: key, setting_value: String(value), updated_at: new Date().toISOString() })
        .onConflict((oc) =>
          oc.column('setting_key').doUpdateSet({ setting_value: String(value), updated_at: new Date().toISOString() })
        )
        .execute();
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

export default router;
