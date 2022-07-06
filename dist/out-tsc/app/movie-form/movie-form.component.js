import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../movie';
let MovieFormComponent = class MovieFormComponent {
    constructor(movieService, modalService) {
        this.movieService = movieService;
        this.modalService = modalService;
        this.genres = ['Action', 'Horror', 'Sci-Fi', 'Comedy'];
        this.model = new Movie(22, 'Test 133', this.genres[0], 'image', 15);
        this.movies = [];
        this.submitted = false;
        this.title = '';
        this.body = '';
        this.closeModal = new EventEmitter();
        this.confirmEvent = new EventEmitter();
    }
    ngOnInit() {
        this.display$ = this.modalService.watch();
    }
    onSubmit() {
        this.submitted = true;
    }
    onClose() {
        this.closeModal.emit();
        this.modalService.close();
    }
    onConfirm() {
        this.confirmEvent.emit();
        this.addMovie();
        this.modalService.close();
    }
    newMovie() {
        this.model = new Movie(43, '', '', '', 12);
    }
    addMovie() {
        console.log("Movie added.");
    }
    ngOnDestroy() {
    }
};
__decorate([
    Input()
], MovieFormComponent.prototype, "title", void 0);
__decorate([
    Input()
], MovieFormComponent.prototype, "body", void 0);
__decorate([
    Output()
], MovieFormComponent.prototype, "closeModal", void 0);
__decorate([
    Output()
], MovieFormComponent.prototype, "confirmEvent", void 0);
MovieFormComponent = __decorate([
    Component({
        selector: 'app-movie-form',
        templateUrl: './movie-form.component.html',
        styleUrls: ['./movie-form.component.css']
    })
], MovieFormComponent);
export { MovieFormComponent };
//# sourceMappingURL=movie-form.component.js.map