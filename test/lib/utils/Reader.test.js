const Reader = require("./../../../lib/utils/Reader");
describe("Unit Test para la clase Reader",()=>{
    test("Lectura de un path",()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).toBeDefined();
    });
});