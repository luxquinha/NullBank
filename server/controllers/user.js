import {db} from "../db.js";

// Função que pega todos os usuários ao lado de sua senha:
export const getUserPassword = (_, res) => {
  const q = 
  "SELECT mat, senha FROM funcionarios"
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
}

// Rota para validação de login:
export const validaLogin = async (req, res) => {
  const {key, tipo_usuario, senha} = req.body;
  let q
  if (tipo_usuario === "cliente"){
    q = 
    `SELECT clientes_cpf, senha
    FROM conta_cliente ccl, contas c, clientes cl
    WHERE ccl.contas_numero = c.numero
    AND (\`clientes_cpf\`  = ?)`
  } 
  else if(tipo_usuario === "funcionario") {
    q = 
    `SELECT mat, senha 
    FROM funcionarios 
    WHERE (\`mat\`  = ? )`
  }

  db.query(q, [key], (err, data) => {
    if (err) return res.json(err);
      data = data[0]
      if(senha === data.senha){
        return res.status(200).json({success: true})
      }
      // // Senha errada então retorna um erro:
      return res.json({success: false});
  });
}

// CRUD de Agências:
export const getAgency = (_, res) => {
    const q = "SELECT * FROM equipe511330.agencias";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        return res.status(200).json(data)
    });
}

export const addAgency = (req, res) => {
    const q =
      "INSERT INTO agencias(`numero`, `nome`,`salario_total_montante`, `cidade`) VALUES(?)";
  
    const values = [
      req.body.numero,
      req.body.nome,
      req.body.salario_total_montante,
      req.body.cidade,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Agência criada com sucesso.");
    });
};

export const updateAgency = (req, res) => {
    const q =
      "UPDATE agencias SET `numero` = ?, `nome` = ?, `salario_total_montante` = ?, `cidade` = ? WHERE `numero` = ?";
  
    const values = [
        req.body.numero,
        req.body.nome,
        req.body.salario_total_montante,
        req.body.cidade,
    ];
    
    db.query(q, [...values, req.params.numero], (err) => {
      if (err) return res.json(err);
      return res.status(200).json("Agência atualizada com sucesso.");
    });
  };

  export const deleteAgency = (req, res) => {
    const q = "DELETE FROM agencias WHERE (`numero` = ?)";
  
    db.query(q, [req.params.numero], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Agência deletada com sucesso.");
    });
  };
  
  // CRUD de Funcionários:
  export const getFunc = (_, res) => {
    const q = "SELECT * FROM equipe511330.funcionarios";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        return res.status(200).json(data)
    });
}

export const addFunc = (req, res) => {
  const q =
    "INSERT INTO funcionarios(`mat`, `nome_completo`, `endereco`, `cidade`, `cargo`, `sexo`, `data_nascimento`, `salario`, `agencia`, `senha`) VALUES(?)";

  const values = [
    req.body.mat,
    req.body.nome_completo,
    req.body.endereco,
    req.body.cidade,
    req.body.cargo,
    req.body.sexo,
    req.body.data_nascimento,
    req.body.salario,
    req.body.agencia,
    req.body.senha,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário criado com sucesso.");
  });
};

export const updateFunc = (req, res) => {
  const q =
    "UPDATE funcionarios SET `mat` = ?, `nome_completo` = ?, `endereco` = ?, `cidade` = ?, `cargo` = ?, `sexo` = ?, `data_nascimento` = ?, `salario` = ?, `agencia` = ?, `senha` = ? WHERE `mat` = ?";

  const values = [
    req.body.mat,
    req.body.nome_completo,
    req.body.endereco,
    req.body.cidade,
    req.body.cargo,
    req.body.sexo,
    req.body.data_nascimento,
    req.body.salario,
    req.body.agencia,
    req.body.senha,
    req.body.mat
  ];
  
  db.query(q, [...values, req.params.mat], (err) => {
    if (err) return res.json(err); 
    return res.status(200).json("Funcionário atualizado com sucesso.");
  });
};

export const deleteFunc = (req, res) => {
  const q = "DELETE FROM funcionarios WHERE (`mat` = ?)";

  db.query(q, [req.params.mat], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário deletado com sucesso.");
  });
};

// CRUD de Transações:
export const getTransacoes = (_, res) => {
  const q = "SELECT * FROM equipe511330.transacoes";

  db.query(q, (err, data) => {
      if(err) return res.json(err);
      
      return res.status(200).json(data)
  });
}

export const addTransacao = (req, res) => {
  const q =
    "INSERT INTO transacoes(`numero_transacao`, `tipo`, `data_hora`, `valor`, `conta_principal`, `conta_transacao`) VALUES(?)";

  const values = [
    req.body.numero_transacao,
    req.body.tipo,
    req.body.data_hora,
    req.body.valor,
    req.body.conta_principal,
    req.body.conta_transacao,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Transação criada com sucesso.");
  });
};

export const updateTransacao = (req, res) => {
  const q =
    "UPDATE transacoes SET `numero_transacao` = ?, `tipo` = ?, `data_hora` = ?, `valor` = ?, `conta_principal` = ?, `conta_transacao` = ? WHERE `numero_transacao` = ?";

  const values = [
    req.body.numero_transacao,
    req.body.tipo,
    req.body.data_hora,
    req.body.valor,
    req.body.conta_principal,
    req.body.conta_transacao,
    req.body.numero_transacao
  ];

  db.query(q, [...values, req.params.numero_transacao], (err) => {
    if (err) return res.json(err); 
    return res.status(200).json("Transação atualizada com sucesso.");
  });
};

export const deleteTransacao = (req, res) => {
  const q = "DELETE FROM transacoes WHERE (`numero_transacao` = ?)";

  db.query(q, [req.params.numero_transacao], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Transação deletada com sucesso.");
  });
};
// CRUD para Clientes:
// Get all clients
export const getClientes = (_, res) => {
  const q = "SELECT * FROM equipe511330.clientes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new client
export const addCliente = (req, res) => {
  const q =
    "INSERT INTO clientes(`cpf`, `nome_completo`, `rg`, `orgao_emissor`, `uf`, `data_nascimento`, `tipo_logradouro`, `nome_logradouro`, `numero`, `bairro`, `cep`, `cidade`, `estado`) VALUES(?)";

  const values = [
    req.body.cpf,
    req.body.nome_completo,
    req.body.rg,
    req.body.orgao_emissor,
    req.body.uf,
    req.body.data_nascimento,
    req.body.tipo_logradouro,
    req.body.nome_logradouro,
    req.body.numero,
    req.body.bairro,
    req.body.cep,
    req.body.cidade,
    req.body.estado,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Cliente criado com sucesso.");
  });
};

// Update a client
export const updateCliente = (req, res) => {
  const q =
    "UPDATE clientes SET `cpf` = ?, `nome_completo` = ?, `rg` = ?, `orgao_emissor` = ?, `uf` = ?, `data_nascimento` = ?, `tipo_logradouro` = ?, `nome_logradouro` = ?, `numero` = ?, `bairro` = ?, `cep` = ?, `cidade` = ?, `estado` = ? WHERE `cpf` = ?";

  const values = [
    req.body.cpf,
    req.body.nome_completo,
    req.body.rg,
    req.body.orgao_emissor,
    req.body.uf,
    req.body.data_nascimento,
    req.body.tipo_logradouro,
    req.body.nome_logradouro,
    req.body.numero,
    req.body.bairro,
    req.body.cep,
    req.body.cidade,
    req.body.estado,
  ];

  db.query(q, [...values, req.params.cpf], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Cliente atualizado com sucesso.");
  });
};

// Delete a client
export const deleteCliente = (req, res) => {
  const q = "DELETE FROM clientes WHERE (`cpf` = ?)";

  db.query(q, [req.params.cpf], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Cliente deletado com sucesso.");
  });
};

// Get all accounts
export const getContas = (_, res) => {
  const q = "SELECT * FROM equipe511330.contas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new account
export const addConta = (req, res) => {
  const q =
    "INSERT INTO contas(`numero`, `saldo`, `senha`, `num_agencia`, `gerente_mat`) VALUES(?)";

  const values = [
    req.body.numero,
    req.body.saldo,
    req.body.senha,
    req.body.num_agencia,
    req.body.gerente_mat,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta criada com sucesso.");
  });
};

// Update an account
export const updateConta = (req, res) => {
  const q =
    "UPDATE contas SET `numero` = ?, `saldo` = ?, `senha` = ?, `num_agencia` = ?, `gerente_mat` = ? WHERE `numero` = ?";

  const values = [
    req.body.numero,
    req.body.saldo,
    req.body.senha,
    req.body.num_agencia,
    req.body.gerente_mat,
  ];

  db.query(q, [...values, req.params.numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta atualizada com sucesso.");
  });
};

// Delete an account
export const deleteConta = (req, res) => {
  const q = "DELETE FROM contas WHERE (`numero` = ?)";

  db.query(q, [req.params.numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta deletada com sucesso.");
  });
};

// Get all dependents
export const getDependentes = (_, res) => {
  const q = "SELECT * FROM equipe511330.dependentes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new dependent
export const addDependente = (req, res) => {
  const q =
    "INSERT INTO dependentes(`nome_completo`, `data_nascimento`, `parentesco`, `idade`, `funcionarios_mat`) VALUES(?)";

  const values = [
    req.body.nome_completo,
    req.body.data_nascimento,
    req.body.parentesco,
    req.body.idade,
    req.body.funcionarios_mat,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dependente criado com sucesso.");
  });
};

// Update a dependent
export const updateDependente = (req, res) => {
  const q =
    "UPDATE dependentes SET `nome_completo` = ?, `data_nascimento` = ?, `parentesco` = ?, `idade` = ?, `funcionarios_mat` = ? WHERE `nome_completo` = ?";

  const values = [
    req.body.nome_completo,
    req.body.data_nascimento,
    req.body.parentesco,
    req.body.idade,
    req.body.funcionarios_mat,
  ];

  db.query(q, [...values, req.params.nome_completo], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dependente atualizado com sucesso.");
  });
};

// Delete a dependent
export const deleteDependente = (req, res) => {
  const q = "DELETE FROM dependentes WHERE (`nome_completo` = ?)";

  db.query(q, [req.params.nome_completo], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dependente deletado com sucesso.");
  });
};

// Get all telefones
export const getTelefones = (_, res) => {
  const q = "SELECT * FROM equipe511330.telefones";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new telefone
export const addTelefone = (req, res) => {
  const q =
    "INSERT INTO telefones(`telefone`, `tipo_telefone`, `cliente_cpf`) VALUES(?)";

  const values = [
    req.body.telefone,
    req.body.tipo_telefone,
    req.body.cliente_cpf,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Telefone adicionado com sucesso.");
  });
};

// Update a telefone
export const updateTelefone = (req, res) => {
  const q =
    "UPDATE telefones SET `telefone` = ?, `tipo_telefone` = ?, `cliente_cpf` = ? WHERE `telefone` = ?";

  const values = [
    req.body.telefone,
    req.body.tipo_telefone,
    req.body.cliente_cpf,
  ];

  db.query(q, [...values, req.params.telefone], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Telefone atualizado com sucesso.");
  });
};

// Delete a telefone
export const deleteTelefone = (req, res) => {
  const q = "DELETE FROM telefones WHERE `telefone` = ?";

  db.query(q, [req.params.telefone], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Telefone deletado com sucesso.");
  });
};

// Get all dependents
export const getEmails = (_, res) => {
  const q = "SELECT * FROM equipe511330.emails";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new dependent
export const addEmail = (req, res) => {
  const q =
    "INSERT INTO `emails`(`email`, `tipo_email`, `clientes_cpf`) VALUES(?)";

  const values = [
    req.body.email,
    req.body.tipo_email,
    req.body.clientes_cpf,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Emails criado com sucesso.");
  });
};

// Update a dependent
export const updateEmail = (req, res) => {
  const q =
    "UPDATE emails SET `email` = ?, `tipo_email` = ?, `clientes_cpf` = ? WHERE `email` = ?";

  const values = [
    req.body.email,
    req.body.tipo_email,
    req.body.clientes_cpf,
  ];

  db.query(q, [...values, req.params.email], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Email atualizado com sucesso.");
  });
};

// Delete a dependent
export const deleteEmail = (req, res) => {
  const q = "DELETE FROM emails WHERE (`email` = ?)";

  db.query(q, [req.params.email], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Email deletado com sucesso.");
  });
};

// Get all conta_cliente relationships
export const getContaClientes = (_, res) => {
  const q = "SELECT * FROM equipe511330.conta_cliente";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new conta_cliente relationship
export const addContaCliente = (req, res) => {
  const q =
    "INSERT INTO `conta_cliente`(`clientes_cpf`, `contas_numero`) VALUES(?)";

  const values = [
    req.body.clientes_cpf,
    req.body.contas_numero,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Relacionamento conta_cliente criado com sucesso.");
  });
};

// Update a conta_cliente relationship
export const updateContaCliente = (req, res) => {
  const q =
    "UPDATE conta_cliente SET `clientes_cpf` = ?, `contas_numero` = ? WHERE `clientes_cpf` = ? AND `contas_numero` = ?";

  const values = [
    req.body.clientes_cpf,
    req.body.contas_numero,
  ];

  db.query(q, [...values, req.params.clientes_cpf, req.params.contas_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Relacionamento conta_cliente atualizado com sucesso.");
  });
};

// Delete a conta_cliente relationship
export const deleteContaCliente = (req, res) => {
  const q = "DELETE FROM conta_cliente WHERE (`clientes_cpf` = ? AND `contas_numero` = ?)";

  db.query(q, [req.params.clientes_cpf, req.params.contas_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Relacionamento conta_cliente deletado com sucesso.");
  });
};

// Get all conta_corrente relationships
export const getContaCorrente = (_, res) => {
  const q = "SELECT * FROM equipe511330.conta_corrente";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new conta_corrente relationship
export const addContaCorrente = (req, res) => {
  const q =
    "INSERT INTO `conta_corrente`(`conta_numero`, `aniversario_contrato`) VALUES(?)";

  const values = [
    
    req.body.conta_numero,
    req.body.aniversario_contrato,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Corrente criado com sucesso.");
  });
};

// Update a conta_cliente relationship
export const updateContaCorrente = (req, res) => {
  const q =
    "UPDATE conta_corrente SET `conta_numero` = ?, `aniversario_contrato` = ? WHERE `conta_numero` = ?";

  const values = [
    req.body.conta_numero,
    req.body.aniversario_contrato,
  ];

  db.query(q, [...values, req.params.conta_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Corrente atualizado com sucesso.");
  });
};

// Delete a conta_cliente relationship
export const deleteContaCorrente = (req, res) => {
  const q = "DELETE FROM conta_corrente WHERE `conta_numero` = ?";

  db.query(q, [req.params.conta_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Corrente deletado com sucesso.");
  });
};

// Get all conta_corrente relationships
export const getContaEspecial = (_, res) => {
  const q = "SELECT * FROM equipe511330.conta_especial";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new conta_corrente relationship
export const addContaEspecial = (req, res) => {
  const q =
    "INSERT INTO `conta_especial`(`conta_numero`, `limite_credito`) VALUES(?)";

  const values = [
    
    req.body.conta_numero,
    req.body.limite_credito,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Especial criado com sucesso.");
  });
};

// Update a conta_cliente relationship
export const updateContaEspecial = (req, res) => {
  const q =
    "UPDATE conta_especial SET `conta_numero` = ?, `limite_credito` = ? WHERE `conta_numero` = ?";

  const values = [
    req.body.conta_numero,
    req.body.limite_credito,
  ];

  db.query(q, [...values, req.params.conta_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Especial atualizado com sucesso.");
  });
};

// Delete a conta_cliente relationship
export const deleteContaEspecial = (req, res) => {
  const q = "DELETE FROM conta_especial WHERE `conta_numero` = ?";

  db.query(q, [req.params.conta_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Especial deletado com sucesso.");
  });
};

// Get all conta_poupanca relationships
export const getContaPoupanca = (_, res) => {
  const q = "SELECT * FROM equipe511330.conta_poupanca";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Add a new conta_poupanca relationship
export const addContaPoupanca = (req, res) => {
  const q =
    "INSERT INTO `conta_poupanca`(`conta_numero`, `taxa_juros`) VALUES(?)";

  const values = [
    req.body.conta_numero,
    req.body.taxa_juros,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Poupança criado com sucesso.");
  });
};

// Update a conta_poupanca relationship
export const updateContaPoupanca = (req, res) => {
  const q =
    "UPDATE conta_poupanca SET `conta_numero` = ?, `taxa_juros` = ? WHERE `conta_numero` = ?";

  const values = [
    req.body.conta_numero,
    req.body.taxa_juros,
  ];

  db.query(q, [...values, req.params.conta_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Poupança atualizado com sucesso.");
  });
};

// Delete a conta_poupanca relationship
export const deleteContaPoupanca = (req, res) => {
  const q = "DELETE FROM conta_poupanca WHERE `conta_numero` = ?";

  db.query(q, [req.params.conta_numero], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Conta Poupança deletado com sucesso.");
  });
};




