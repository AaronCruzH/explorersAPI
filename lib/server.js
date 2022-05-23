const express = require("express")
const app = express()
app.use(express.json())
const port = 3000


app.get("/v1/explorers/")


app.listen(port,()=>{
    console.log(`Explorers API is listen in Local Host:  ${port}`);
})

