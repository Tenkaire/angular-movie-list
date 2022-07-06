import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
let MovieService = class MovieService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.moviesUrl = 'api/movies'; // URL to web api
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    // getMovies(): Observable<Movie[]> {
    //   const movies = of(MOVIES);
    //   this.messageService.add('MovieService: fetched movies');
    //   return movies;
    // }
    /** GET heroes from the server */
    getMovies() {
        return this.http.get(this.moviesUrl)
            .pipe(tap(_ => this.log('fetched movies')), catchError(this.handleError('getMovies', [])));
    }
    /** GET hero by id. Will 404 if id not found */
    getMovie(id) {
        const url = `${this.moviesUrl}/${id}`;
        return this.http.get(url).pipe(tap(_ => this.log(`fetched hero id=${id}`)), catchError(this.handleError(`getMovie id=${id}`)));
    }
    /** GET hero by id. Return `undefined` when id not found */
    getMovieNo404(id) {
        const url = `${this.moviesUrl}/?id=${id}`;
        return this.http.get(url)
            .pipe(map(movies => movies[0]), // returns a {0|1} element array
        tap(h => {
            const outcome = h ? 'fetched' : 'did not find';
            this.log(`${outcome} hero id=${id}`);
        }), catchError(this.handleError(`getMovie id=${id}`)));
    }
    /* GET heroes whose name contains search term */
    searchMovies(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get(`${this.moviesUrl}/?name=${term}`).pipe(tap(x => x.length ?
            this.log(`found heroes matching "${term}"`) :
            this.log(`no heroes matching "${term}"`)), catchError(this.handleError('searchMovies', [])));
    }
    // getMovie (id: number) : Observable<Movie> {
    //   const movie = MOVIES.find(m => m.id = id)!;
    //   this.messageService.add(`MovieService: fetched movie id = ${id}`);
    //   return of(movie);
    // }
    log(message) {
        this.messageService.add(`HeroService: ${message}`);
    }
    /** PUT: update the hero on the server */
    updateMovie(movie) {
        return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(tap(_ => this.log(`updated movie id=${movie.id}`)), catchError(this.handleError('updateMovie')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
    /** POST: add a new hero to the server */
    addMovie(movie) {
        return this.http.post(this.moviesUrl, movie, this.httpOptions).pipe(tap((newMovie) => this.log(`added movie w/ id=${newMovie.id}`)), catchError(this.handleError('addMovie')));
    }
    deleteMovie(id) {
        const url = `${this.moviesUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(tap(_ => this.log(`deleted movie id=${id}`)), catchError(this.handleError('deleteMovie')));
    }
};
MovieService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MovieService);
export { MovieService };
//# sourceMappingURL=movie.service.js.map