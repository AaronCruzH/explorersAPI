const ExplorerService = require("./../../../lib/services/ExplorerService")
describe("Unit Testing Clase ExplorerService",()=>{
    test("Metodo getAllExplorers devuelve el array de explorers",()=>{
        const explorers = ExplorerService.getAllExplorers()
        expect(explorers).toBeDefined()
    })
})