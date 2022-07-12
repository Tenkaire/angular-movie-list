import { Component, OnInit } from '@angular/core';
import { MOVIES } from './../mock-movies';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {  
  mediator;
  index = 0;
  movies: Movie[] = MOVIES;

  private startIndex = 0;
  private lastIndex = 4;
  

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    this.mediator = [this.movies[0], this.movies[1], this.movies[2], this.movies[3], this.movies[4]];
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

  leftClick(): void {
    if (this.startIndex == 0) {
      this.startIndex = this.movies.length-1
      this.lastIndex--
      this.mediator.unshift(this.movies[this.movies.length-1])
      this.mediator.pop()
    }
    else if (this.lastIndex === 0) {
      this.lastIndex = this.movies.length-1
      this.startIndex--
      this.mediator.unshift(this.movies[this.startIndex])
      this.mediator.pop()
    }
    else {
      this.startIndex--
      this.lastIndex--
      this.mediator.unshift(this.movies[this.startIndex])
      this.mediator.pop()
    }
    console.log('start ', this.startIndex, 'last ', this.lastIndex)
    return
  }

  rightClick(): void {
    if (this.lastIndex === this.movies.length-1) {
      this.lastIndex = 0
      this.startIndex++
      this.mediator.shift()
      this.mediator.push(this.movies[0])
    }
    else if (this.startIndex === this.movies.length-1) {
      this.startIndex = 0
      this.lastIndex++
      this.mediator.shift()
      this.mediator.push(this.movies[this.lastIndex])
    }
    else {
      this.startIndex++
      this.lastIndex++ 
      this.mediator.shift()
      this.mediator.push(this.movies[this.lastIndex])
    }
    console.log('start ', this.startIndex, 'last ', this.lastIndex)
    return
  }

}
