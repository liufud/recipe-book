import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() clickCheck = new EventEmitter<string>();

    clickChecker(checkerInput: string) {
        this.clickCheck.emit(checkerInput);
    }
}
