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