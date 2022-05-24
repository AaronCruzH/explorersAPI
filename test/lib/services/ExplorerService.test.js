const ExplorerService = require("./../../../lib/services/ExplorerService")
describe("Unit Testing Clase ExplorerService",()=>{
    test("Metodo getAllExplorers devuelve el array de explorers",()=>{
        const explorers = ExplorerService.getAllExplorers()
        expect(explorers).toBeDefined()
    })
    test("Metodo getCheckedEmails, regresa los emails de los explorers que tienen certificacion",()=>{
        const explorers = ExplorerService.getCheckedEmails()
        const check = true
        explorers.forEach((explorer)=>{if(explorer.haveCertification==false){check = false}})
        expect(check).toBe(true)
    })
})