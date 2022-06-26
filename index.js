const express = require("express");
const path = require("path");
const routes = require("./routes/routes")
const db = require("./models/db");

(async() => {
   
    
    console.log('começou');
    const usuarios = await db.selectUsers();
    console.log(usuarios);
})();

    const app = express();
    const port = 3000;


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(routes)




app.listen(port, () => console.log(`Server rodando na porta http://localhost:${port}`));
