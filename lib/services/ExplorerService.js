const Reader = require("./../utils/Reader");
class ExplorerService{
    static getAllExplorers(){
        return Reader.readJsonFile("explorers.json");
    }
    static getCheckedEmails(){
        const explorers = this.getAllExplorers();
        const certificatedExplorers = explorers.filter((explorer)=>explorer.haveCertification==true);
        return certificatedExplorers.map((explorer)=>explorer.email);
    }
}
module.exports = ExplorerService;