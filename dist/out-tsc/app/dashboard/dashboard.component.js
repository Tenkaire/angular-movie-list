import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    ngOnInit() {
        this.getMovies();
    }
    getMovies() {
        this.movieService.getMovies().subscribe(movies => this.movies = movies);
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map