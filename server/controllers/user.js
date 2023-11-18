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