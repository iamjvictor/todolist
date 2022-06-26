async function connect() {

  if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://root:250202joaov@localhost:3306/todo"
  );
  console.log("conectado ao sql");
  global.connection = connection;
  return connection;
  
}


async function selectUsers(){
    const conn = await connect();
    const [rows] = await conn.query('select * from usuarios;');
    return rows;
}


module.exports={selectUsers}



