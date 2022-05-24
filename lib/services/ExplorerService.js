const Reader = require("./../utils/Reader")
class ExplorerService{
    static getAllExplorers(){
        return Reader.readJsonFile("explorers.json")
    }
    static getCheckedEmails(){
        const explorers = this.getAllExplorers()
        return explorers.filter((explorer)=>explorer.haveCertification==true)
    }
}
module.exports = ExplorerService