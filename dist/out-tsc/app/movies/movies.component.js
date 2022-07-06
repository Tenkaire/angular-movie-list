import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MoviesComponent = class MoviesComponent {
    constructor(movieService, messageService) {
        this.movieService = movieService;
        this.messageService = messageService;
        this.movies = [];
    }
    ngOnInit() {
        this.getMovies();
    }
    getMovies() {
        this.movieService.getMovies().subscribe(movies => this.movies = movies);
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.movieService.addMovie({ name })
            .subscribe(movie => {
            this.movies.push(movie);
        });
    }
    delete(movie) {
        this.movies = this.movies.filter(h => h !== movie);
        this.movieService.deleteMovie(movie.id).subscribe();
    }
};
MoviesComponent = __decorate([
    Component({
        selector: 'app-movies',
        templateUrl: './movies.component.html',
        styleUrls: ['./movies.component.css']
    })
], MoviesComponent);
export { MoviesComponent };
//# sourceMappingURL=movies.component.js.map