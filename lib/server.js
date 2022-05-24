const express = require("express")
const ExplorerController = require("./controllers/ExplorerController")
const app = express()
app.use(express.json())
const port = 3000


app.get("/v1/explorers",(request,response)=>{
    response.json(ExplorerController.filterAllExplorers());
})
app.get("/v1/explorers/haveCertification",(request,response)=>{
    response.json(ExplorerController.filterCheckedEmails());
})
app.listen(port,()=>{
    console.log(`Explorers API is listen in Local Host:  ${port}`);
})

