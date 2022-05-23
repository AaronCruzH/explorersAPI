const ExplorerController = require("./../../../lib/controllers/ExplorerController")
describe("Unit Testing ExplorerController",()=>{
    test("filterAllExplorers devuelve explorers",()=>{
        const explorers = ExplorerController.filterAllExplorers()
        expect(explorers).toBeDefined()
    })
})