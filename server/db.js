import mysql from "mysql"

export const db = mysql.createConnection({
    host: "db4free.net",
    user: "abraao",
    password: "db4free.net",
    database: "equipe511330"
})


db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados!');
    }
  });





