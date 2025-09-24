import { Router } from 'express';
import { getProductById } from './productController.ts';
import { addToCart, getCart, removeItemFromCart } from './cartController.ts';

const router = Router();

router.get('/products/:id', getProductById);

router.delete('/cart/:id', removeItemFromCart);

router.post('/cart/add', addToCart);

router.get('/cart', getCart);

export default router;