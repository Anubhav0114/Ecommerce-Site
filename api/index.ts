import { Router } from 'express';
import ProductModel, { Product } from './models';

const router = Router();

router.get('/data', async (req, res) => {
    console.log("dddd")
    try {
        const data: Product[] = await ProductModel.find();
        res.status(200).json(data);

    } catch (error) {
        console.error('Failed to retrieve data', error);
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
});

router.get('/', async (req, res) => {
    res.status(200).send("Hello")

})


export default router;