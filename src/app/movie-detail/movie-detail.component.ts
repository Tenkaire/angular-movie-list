import { MovieService } from './../movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie? : Movie;
  genres = ['Action', 'Horror', 'Sci-Fi', 'Comedy', 'Romantic', 'Adventure', 'Documentary'];
  selectedValue: number;
  stars: number[] = [1, 2, 3, 4, 5];
  averageRating: number;
  quotient: number;
  remainder: number;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.movie) {
      this.movieService.updateMovie(this.movie)
        .subscribe(() => this.goBack());
    }
  }

  getAverageRating(): number {
    this.averageRating = (this.movie.contentRating + this.movie.actorRating + this.movie.directorRating + this.movie.topicRating) / 4;
    this.quotient = Math.floor(this.averageRating);
    this.remainder = this.averageRating - this.quotient;
    if (this.remainder > 0.5) {
      return this.quotient+1;
    } else {
      return this.quotient;
    }    
  }

}
