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
    this.accountService.updateStatus(this.id,status);
    this.accountService.onStatusUpdated.emit(status);
  }
}
