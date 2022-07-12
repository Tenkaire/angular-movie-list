
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  @Input() movie? : Movie;
  genres = ['Action', 'Horror', 'Sci-Fi', 'Comedy', 'Romantic', 'Adventure', 'Documentary'];
  stars: number[] = [1, 2, 3, 4, 5];
  
  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) {
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
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

  // to count rating stars
  countContentStar(rating) {
    this.movie.contentRating = rating;
    console.log('Value of content star', rating);  
  }

  countActorStar(rating) {
    this.movie.actorRating = rating;
    console.log('Value of actor star', rating);  
  }

  countDirectorStar(rating) {
    this.movie.directorRating = rating;
    console.log('Value of director star', rating);  
  }

  countTopicStar(rating) {
    this.movie.topicRating = rating;
    console.log('Value of topic star', rating);  
  }

}
