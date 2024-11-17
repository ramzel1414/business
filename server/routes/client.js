import express from 'express';
import { getProducts, getCustomers, getTransactions, getGeography, customerAuth, customerLogin, customerRegister, customerLogout } from '../controllers/client.js';

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.post("/customers/auth", customerAuth);
router.get("/customers/login", customerLogin);
router.get("/customers/register", customerRegister);
router.get("/customers/logout", customerLogout);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);


export default router;