import express from 'express';
import { getAgency, addAgency, updateAgency, deleteAgency } from '../controllers/user.js';

const router = express.Router();

router.get('/', getAgency)

router.post("/", addAgency)

router.put("/:numero", updateAgency)

router.delete("/:numero", deleteAgency)

export default router;