const Reader = require("./../utils/Reader")
class ExplorerService{
    static getAllExplorers(){
        return Reader.readJsonFile("explorers.json")
    }
}
module.exports = ExplorerService