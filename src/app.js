import express from 'express';
import routerProd from './routes/products.routes.js';
import routerCart from './routes/cart.routes.js';

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', routerProd);
app.use('/api/carts', routerCart);

app.listen(PORT, () => {
	console.log(`Servidor desde puerto: ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});