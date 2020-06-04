import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    @Output() selectedType = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }


    
    onSelect(type_ : string){
        this.selectedType.emit(type_)

    }
}