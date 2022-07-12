import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies$! : Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService, private location: Location, private router: Router) { 
    this.reloadComponent();
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // This function is not used in the component, it reloads the page instead of the component
  refresh(): void {
    window.location.reload();
  }

  // It reloads the component
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  ngOnInit(): void { 
    this.movies$ = this.searchTerms.pipe(
      // wait 200ms after each keystroke before considering the term
      debounceTime(200),
      // // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.movieService.searchMovies(term)),     
    ); 
  }

  resetValue(): void {
    this.location.go(this.location.path());
    this.ngOnInit();
    this.searchTerms.next("");
  }

}
