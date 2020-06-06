import { Component, Input } from '@angular/core';
import { LogginService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers : [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logingService: LogginService,private accountService : AccountService) { }

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);

    this.accountService.updateStatus(this.id,status);
    this.logingService.logStatusChange(status);
  }
}
