const { Client } = require('pg');
const { cadastra } = require('./script2.js');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'loginSite',
  password: 'postgres',
  port: 5432,
});

client.connect(function (err) {
  if (err) {
    console.error('Erro de conexão', err.stack);
    return;
  }
  console.log('Connected!');

  cadastra(nomeP, emailP, senhaP);

    console.log('Número de registros inseridos:', result.rowCount);
    client.end();
  });
