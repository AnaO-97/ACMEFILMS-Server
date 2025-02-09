const port = 3001;

const app  = require("./src/app");
const { database } = require("./src/database");

// force : elimina
// alter : actualiza

database.sync({ alter: true }).then((res)=>{
    app.listen(port, "0.0.0.0", ()=>{
        console.log(`Server running on port ${ port }`);
    });
}).catch((err)=>{
    console.log(`SRC/APP error ${ err }`)
});