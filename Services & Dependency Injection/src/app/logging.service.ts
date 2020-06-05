export class LogginService{
    
    logStatusChange(status : String){
        console.log('A server status changed, new status: ' + status);
    }
}