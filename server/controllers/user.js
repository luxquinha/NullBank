import {db} from "../db.js";

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


