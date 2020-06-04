import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    isRecipe : boolean = true;
    @Output() selectedType = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }


    
    onSelect(type_ : string){
        if(type_ === 's'){
            this.isRecipe = false;
        }
        else{
            this.isRecipe = true;
        }
        this.selectedType.emit(type_);
    }
}