import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddMovieDialogComponent = class AddMovieDialogComponent {
    //display$: Observable<'open' | 'close'>;
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        //this.display$ = this.modalService.watch();
    }
    close() {
        this.modalService.close();
    }
};
AddMovieDialogComponent = __decorate([
    Component({
        selector: 'app-add-movie-dialog',
        templateUrl: './add-movie-dialog.component.html',
        styleUrls: ['./add-movie-dialog.component.css']
    })
], AddMovieDialogComponent);
export { AddMovieDialogComponent };
//# sourceMappingURL=add-movie-dialog.component.js.map