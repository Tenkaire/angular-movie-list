import { Component, OnInit } from '@angular/core';
import { MovieUpdateComponent } from './../movie-update/movie-update.component';
import { MOVIES } from './../mock-movies';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = MOVIES;
  stars: number[] = [1, 2, 3, 4, 5];
  genres = ['Action', 'Horror', 'Sci-Fi', 'Comedy', 'Romantic', 'Adventure', 'Documentary'];
  ratings = ['Overall', 'Content', 'Actor', 'Director', 'Topic'];
  dialog: any;
  selectedGenre: any;
  selectedRating: any;
  starRating: number;
  sortName: string;

  hiddenContentRating: boolean;
  hiddenActorRating: boolean;
  hiddenDirectorRating: boolean;
  hiddenTopicRating: boolean;
  hiddenOverallRating: boolean;

  reverse: boolean;
  selectedValue = 0;
  page: number = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    this.movies = MOVIES;
    this.selectedGenre = "All";
    this.selectedRating = 0;
    this.reverse = false;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.movieService.addMovie({ name } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie.id).subscribe();
    this.reverse = !this.reverse;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieUpdateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  update(movie: Movie): void {
    const dialogRef = this.dialog.open(MovieUpdateComponent, {
      width: '250px',
      movie: {id: movie.id, name: movie.name, genre: movie.genre, 
        contentrating: movie.contentRating, 
        image: movie.image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  SearchGenre(): void {
    this.movies = MOVIES;
    if (this.selectedGenre == "All") {
      this.ngOnInit();
    } else if (this.selectedGenre == "Action") {
      this.movies = this.movies.filter(res => {
        return res.genre.match("Action")
      })
    } else if (this.selectedGenre == "Horror") {
      this.movies = this.movies.filter(res => {
        return res.genre.match("Horror")
      })
    } else if (this.selectedGenre == "Sci-Fi") {
      this.movies = this.movies.filter(res => {
        return res.genre.match("Sci-Fi")
      })
    } else if (this.selectedGenre == "Comedy") {
      this.movies = this.movies.filter(res => {
        return res.genre.match("Comedy")
      })
    } else if (this.selectedGenre == "Romantic") {
      this.movies = this.movies.filter(res => {
        return res.genre.match("Romantic")
      })
    } else if (this.selectedGenre == "Adventure") {
      this.movies = this.movies.filter(res => {
        return res.genre.match("Adventure")
      })
    } else if (this.selectedGenre == "Documentary") {
      this.movies = this.movies.filter(res => {
        return res.genre.match("Documentary")
      })
    } else {
      this.ngOnInit();
    }
  }

  sortID(): void {
    if (this.reverse) {
      let newOrder = this.movies.sort((a,b) => a.id - b.id);
      this.movies = newOrder;
    } else {
      let newOrder = this.movies.sort((a,b) => b.id - a.id);
      this.movies = newOrder;
    }
    this.reverse = !this.reverse;
  }

  sortMovieName(): void {
    if(this.reverse) {
      let newOrder = this.movies.sort((a,b) => a.name > b.name ? 1 : -1);
      this.movies = newOrder;
    } else {
      let newOrder = this.movies.sort((a,b) => a.name > b.name ? -1 : 1);
      this.movies = newOrder;
    }
    this.reverse = !this.reverse;
  }

  getAverage(content, actor, director, topic): number {
    var averageRating = (content + actor + director + topic) / 4;
    var quotient = Math.floor(averageRating);
    var remainder = averageRating - quotient;
    if (remainder > 0.5) {
      return quotient+1;
    } else {
      return quotient;
    } 
  }

}


