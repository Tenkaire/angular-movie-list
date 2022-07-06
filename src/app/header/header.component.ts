import { Component, OnInit } from '@angular/core';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Patrick\'s Movie List';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MovieFormComponent, {
      data: '',
      autoFocus: false,
      maxHeight: '80vh',
      width: '50%'      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(`Dialog result: ${result}`);
      }     
    });
  }

}
