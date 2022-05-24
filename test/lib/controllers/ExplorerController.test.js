const ExplorerController = require("./../../../lib/controllers/ExplorerController")
describe("Unit Testing ExplorerController",()=>{
    test("filterAllExplorers devuelve explorers",()=>{
        const explorers = ExplorerController.filterAllExplorers()
        expect(explorers).toBeDefined()
    })
    test("filterCheckedEmails, devuelve la lista explorers con certificación",()=>{
        const explorers = ExplorerController.filterCheckedEmails()
        const check = true
        explorers.forEach((explorer)=>{if(explorer.haveCertification==false){check = false}})
        expect(check).toBe(true)
    })
})