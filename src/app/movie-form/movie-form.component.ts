import { Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalService } from '../modal.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit, OnDestroy {
  genres = ['Action', 'Horror', 'Sci-Fi', 'Comedy', 'Romantic', 'Adventure', 'Documentary'];
  model: Movie;
  movies: Movie[] = [];
  display$: Observable<'open' | 'close'> | undefined;
  file: File = null as any;
  shortLink: string;

  selectedValue: number;
  stars: number[] = [1, 2, 3, 4, 5];

  submitted = false;
  imageUploaded = false;

  averageRating: number;
  quotient: number;
  remainder: number;

  contentRatingSelected: boolean;
  actorRatingSelected: boolean;
  directorRatingSelected: boolean;
  topicRatingSelected: boolean;
  isRatingValid: boolean;

  constructor(private modalService: ModalService, 
              private matDialogRef: MatDialogRef<MovieFormComponent>,   
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.model = new Movie(Math.floor(Math.random() * 1000), '', '', '', 0, 0, 0, 0);
    this.display$ = this.modalService.watch();
    this.shortLink = "../../assets/images/default_image.png";
    this.imageUploaded = false;

    this.contentRatingSelected = false;
    this.actorRatingSelected = false;
    this.directorRatingSelected = false;
    this.topicRatingSelected = false;
    this.isRatingValid = false;
  }

  onSubmit(): void {
    this.submitted = true;
  }

  onClose(): void {
    this.matDialogRef.close();
  }

  onConfirm(movieId: number, movieName: string, genre: string, image: string, 
    contentRating: number, actorRating: number, directorRating: number, topicRating: number): void {
    this.add(movieId, movieName, genre, image, contentRating, actorRating, directorRating, topicRating);
    this.matDialogRef.close('closed');
    this.onClose();
  }

  add(movieId: number, movieName: string, genre: string, image: string, 
      contentRating: number, actorRating: number, directorRating: number, topicRating: number): void {
    movieName = movieName.trim();
    genre = genre.trim();
    this.submitted=false;
    image = this.shortLink;
    this.model = new Movie(movieId, movieName, genre, image, contentRating, actorRating, directorRating, topicRating);
    
    if (!movieName) { return; }
    this.movieService.addMovie(this.model)
      .subscribe(movie => {
        this.movies.push(movie);
      });

    console.log("Movie added.")
  }

  onFileSelected(event: any): void {
    console.log(event);
    this.file = event.target.files[0];
    this.imageUploaded = true;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      // read file as data url
      reader.readAsDataURL(event.target.files[0]); 

      // called once readAsDataURL is completed
      reader.onload = (event: any) => { 
        this.shortLink = event.target.result;
      }
    } 
  }

  // to count rating stars and check if all ratings have values
  countContentStar(rating): void {
    this.model.contentRating = rating;
    this.contentRatingSelected = true;
    this.isAllSelected();
    console.log('Value of content star', rating);  
  }

  countActorStar(rating): void {
    this.model.actorRating = rating;
    this.actorRatingSelected = true;
    this.isAllSelected();
    console.log('Value of actor star', rating);  
  }

  countDirectorStar(rating): void {
    this.model.directorRating = rating;
    this.directorRatingSelected = true;
    this.isAllSelected();
    console.log('Value of director star', rating);  
  }

  countTopicStar(rating): void {
    this.model.topicRating = rating;
    this.topicRatingSelected = true;
    this.isAllSelected();
    console.log('Value of topic star', rating);  
  }

  // called inside of count star function
  isAllSelected(): void {
    this.isRatingValid = this.contentRatingSelected && 
    this.actorRatingSelected && 
    this.directorRatingSelected && 
    this.topicRatingSelected; 
  }

  // return the overall ratings value
  getAverageRating(): number {
    this.averageRating = (this.model.contentRating + this.model.actorRating + this.model.directorRating + this.model.topicRating) / 4;
    this.quotient = Math.floor(this.averageRating);
    this.remainder = this.averageRating - this.quotient;
    if (this.remainder > 0.5) {
      return this.quotient+1;
    } else {
      return this.quotient;
    }    
  }
  
  ngOnDestroy(): void {
  }

}
