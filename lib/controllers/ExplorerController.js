const ExplorerService = require("./../services/ExplorerService");
class ExplorerController{
    static filterAllExplorers(){
        return ExplorerService.getAllExplorers();
    }
    static filterCheckedEmails(){
        return ExplorerService.getCheckedEmails();
    }
    static filterCheckedCredits(){
        return ExplorerService.getCheckedCredits();
    }
}
module.exports = ExplorerController; 