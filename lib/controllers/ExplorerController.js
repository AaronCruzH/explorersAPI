const ExplorerService = require("./../services/ExplorerService")
class ExplorerController{
    static filterAllExplorers(){
        return ExplorerService.getAllExplorers()
    }
}
module.exports = ExplorerController