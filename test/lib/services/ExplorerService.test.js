const ExplorerService = require("./../../../lib/services/ExplorerService");
describe("Unit Testing Clase ExplorerService",()=>{
    test("Metodo getAllExplorers devuelve el array de explorers",()=>{
        const explorers = ExplorerService.getAllExplorers();
        expect(explorers).toBeDefined();
    });
    test("Metodo getCheckedEmails, regresa los emails de los explorers que tienen certificacion",()=>{
        const explorers = ExplorerService.getCheckedEmails();
        expect(explorers).toBeDefined();
    });
    test("Metodo getCheckedCredits, regresa los estudiantes con más de 500 creditos",()=>{
        const explorers = ExplorerService.getCheckedCredits();
        expect(explorers).toBeDefined();
    });
});