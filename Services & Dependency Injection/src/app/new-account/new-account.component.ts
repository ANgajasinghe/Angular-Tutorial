import { Component } from '@angular/core';
import { LogginService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService] // give service to us 
})
export class NewAccountComponent {
  
  // NO NEED THIS WE HAVE SERVICE NOW
  //@Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  /*
    we have to tell to angular we need to use this service for this component 
    To that angular usues Dependency Injection methods 

    ---- constructor(private logingService : LogginService){} --
    this simple step tells to angular we need a instence of this service 

    mot only that we need to tell to angular how we wants this service To 
    that,
    @Component({
      providers:[LogginService] // give service to us 
    })


    
  */
  constructor(private logingService: LogginService , private accountService : AccountService ) { 

    this.accountService.onStatusUpdated.subscribe(
      (status:string)=>alert(`New Status ${status}`)
    );
    
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.addAccount(accountName,accountStatus);
    //this.logingService.logStatusChange(accountStatus);

    //this is not a proper way 
    //const service = new LogginService();
    //service.logStatusChange(accountStatus); -- this is manually no good for angular echo system 

   


    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
