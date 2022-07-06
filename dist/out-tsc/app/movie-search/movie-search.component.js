import { __decorate } from "tslib";
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { Component } from '@angular/core';
let MovieSearchComponent = class MovieSearchComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.searchTerms = new Subject();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.movies$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300), 
        // ignore new term if same as previous term
        distinctUntilChanged(), 
        // switch to new search observable each time the term changes
        switchMap((term) => this.movieService.searchMovies(term)));
    }
};
MovieSearchComponent = __decorate([
    Component({
        selector: 'app-movie-search',
        templateUrl: './movie-search.component.html',
        styleUrls: ['./movie-search.component.css']
    })
], MovieSearchComponent);
export { MovieSearchComponent };
//# sourceMappingURL=movie-search.component.js.map