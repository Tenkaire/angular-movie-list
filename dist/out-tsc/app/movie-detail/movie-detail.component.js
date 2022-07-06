import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MovieDetailComponent = class MovieDetailComponent {
    constructor(route, movieService, location) {
        this.route = route;
        this.movieService = movieService;
        this.location = location;
    }
    ngOnInit() {
        this.getMovie();
    }
    getMovie() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
    }
    goBack() {
        this.location.back();
    }
    save() {
        if (this.movie) {
            this.movieService.updateMovie(this.movie)
                .subscribe(() => this.goBack());
        }
    }
};
__decorate([
    Input()
], MovieDetailComponent.prototype, "movie", void 0);
MovieDetailComponent = __decorate([
    Component({
        selector: 'app-movie-detail',
        templateUrl: './movie-detail.component.html',
        styleUrls: ['./movie-detail.component.css']
    })
], MovieDetailComponent);
export { MovieDetailComponent };
//# sourceMappingURL=movie-detail.component.js.map