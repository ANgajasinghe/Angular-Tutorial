import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    isRecipe : boolean = true;

    constructor() { }
    
    ngOnInit() { }

}