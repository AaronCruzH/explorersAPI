const ExplorerController = require("./../../../lib/controllers/ExplorerController");
describe("Unit Testing ExplorerController",()=>{
    test("filterAllExplorers devuelve explorers",()=>{
        const explorers = ExplorerController.filterAllExplorers();
        expect(explorers).toBeDefined();
    });
    test("filterCheckedEmails, devuelve la lista explorers con certificación",()=>{
        const explorers = ExplorerController.filterCheckedEmails();
        expect(explorers).toBeDefined();
    });
    test("filterCheckedCredits, devuelve el nombre de los explorers con más de 500 credits",()=>{
        const explorers = ExplorerController.filterCheckedCredits();
        expect(explorers).toBeDefined();
    });
});