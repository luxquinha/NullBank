import express from 'express';
import { getAgency, addAgency, updateAgency, deleteAgency } from '../controllers/user.js';
import { getFunc, addFunc, updateFunc, deleteFunc} from '../controllers/user.js';
import { getTransacoes, addTransacao, updateTransacao, deleteTransacao,} from '../controllers/user.js';
import { getClientes, addCliente, updateCliente, deleteCliente } from '../controllers/user.js';
import { getContas, addConta, updateConta, deleteConta } from '../controllers/user.js';
import { getDependentes, addDependente, updateDependente, deleteDependente } from '../controllers/user.js';
import { getTelefones, addTelefone, updateTelefone, deleteTelefone } from '../controllers/user.js';
import { getEmails, addEmail, updateEmail, deleteEmail } from '../controllers/user.js';

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


  
  // Rotas para transações
router.get('/transacoes', getTransacoes);
router.post('/transacoes', addTransacao);
router.put('/transacoes/:numero_transacao', updateTransacao);
router.delete('/transacoes/:numero_transacao', deleteTransacao);


// Routes for clientes
router.get('/clientes', getClientes);
router.post('/clientes', addCliente);
router.put('/clientes/:cpf', updateCliente);
router.delete('/clientes/:cpf', deleteCliente);



// Routes for contas
router.get('/contas', getContas);
router.post('/contas', addConta);
router.put('/contas/:numero', updateConta);
router.delete('/contas/:numero', deleteConta);

// Routes for dependentes
router.get('/dependentes', getDependentes);
router.post('/dependentes', addDependente);
router.put('/dependentes/:nome_completo', updateDependente);
router.delete('/dependentes/:nome_completo', deleteDependente);

// Routes for telefones
router.get('/telefones', getTelefones);
router.post('/telefones', addTelefone);
router.put('/telefones/:telefone', updateTelefone);
router.delete('/telefones/:telefone', deleteTelefone);

// Routes for emails
router.get('/emails', getEmails);
router.post('/emails', addEmail);
router.put('/emails/:email', updateEmail);
router.delete('/emails/:email', deleteEmail);



export default router;