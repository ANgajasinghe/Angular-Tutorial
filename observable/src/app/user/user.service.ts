import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'}) // no need to add providers array
export class UserServices{

    //activatedEmitter = new EventEmitter<boolean>();

    //Better than EventEmitter WE HAVE SUBJECT

    //Subject Only valide for CROCESS COMPONENT COMMUNICATION THROUGH SERVICES
    //NOT VALIDE FOR @Output 
    activatedEmitter = new Subject<boolean>();
}