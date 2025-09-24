import type { Request, Response } from 'express';
import { allProducts } from '../models/data.ts';

export const getProductById = (req: Request, res: Response) => {

    const productId = req.params.id;
    const product = allProducts.find(p => p.id === productId);

    if (product) {

        return res.json(product);
    }

    return res.status(404).json({ message: 'Product not found' });
};