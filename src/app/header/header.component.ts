import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() clickCheck = new EventEmitter<string>();

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService
    ) {}

    clickChecker(checkerInput: string) {
        this.clickCheck.emit(checkerInput);
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Recipe[]) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
