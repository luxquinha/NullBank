import express from 'express';
import { getAgency, addAgency, updateAgency, deleteAgency } from '../controllers/user.js';
import { getFunc, addFunc, updateFunc, deleteFunc} from '../controllers/user.js';

const router = express.Router();

router.get('/', getAgency)

router.post("/", addAgency)

router.put("/:numero", updateAgency)

router.delete("/:numero", deleteAgency)

// Rotas para funcionários
router.get('/func', getFunc);
router.post('/func', addFunc);
router.put('/func/:mat', updateFunc);
router.delete('/func/:mat', deleteFunc);

export default router;